# SDK

## Overview

Provides APIs for creating and managing Amazon Forecast resources.

Amazon Web Services documentation
<https://docs.aws.amazon.com/forecast/>
### Available Operations

* [createAutoPredictor](#createautopredictor) - <p>Creates an Amazon Forecast predictor.</p> <p>Amazon Forecast creates predictors with AutoPredictor, which involves applying the optimal combination of algorithms to each time series in your datasets. You can use <a>CreateAutoPredictor</a> to create new predictors or upgrade/retrain existing predictors.</p> <p> <b>Creating new predictors</b> </p> <p>The following parameters are required when creating a new predictor:</p> <ul> <li> <p> <code>PredictorName</code> - A unique name for the predictor.</p> </li> <li> <p> <code>DatasetGroupArn</code> - The ARN of the dataset group used to train the predictor.</p> </li> <li> <p> <code>ForecastFrequency</code> - The granularity of your forecasts (hourly, daily, weekly, etc).</p> </li> <li> <p> <code>ForecastHorizon</code> - The number of time-steps that the model predicts. The forecast horizon is also called the prediction length.</p> </li> </ul> <p>When creating a new predictor, do not specify a value for <code>ReferencePredictorArn</code>.</p> <p> <b>Upgrading and retraining predictors</b> </p> <p>The following parameters are required when retraining or upgrading a predictor:</p> <ul> <li> <p> <code>PredictorName</code> - A unique name for the predictor.</p> </li> <li> <p> <code>ReferencePredictorArn</code> - The ARN of the predictor to retrain or upgrade.</p> </li> </ul> <p>When upgrading or retraining a predictor, only specify values for the <code>ReferencePredictorArn</code> and <code>PredictorName</code>. </p>
* [createDataset](#createdataset) - <p>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:</p> <ul> <li> <p> <i> <code>DataFrequency</code> </i> - How frequently your historical time-series data is collected.</p> </li> <li> <p> <i> <code>Domain</code> </i> and <i> <code>DatasetType</code> </i> - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields.</p> </li> <li> <p> <i> <code>Schema</code> </i> - A schema specifies the fields in the dataset, including the field name and data type.</p> </li> </ul> <p>After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Importing datasets</a>.</p> <p>To get a list of all your datasets, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation.</p> <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub repository</a>.</p> <note> <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import training data. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation to get the status.</p> </note>
* [createDatasetGroup](#createdatasetgroup) - <p>Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation.</p> <p>After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Dataset groups</a>.</p> <p>To get a list of all your datasets groups, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation.</p> <note> <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> </note>
* [createDatasetImportJob](#createdatasetimportjob) - <p>Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to.</p> <p>You must specify a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DataSource.html">DataSource</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an internal Amazon Web Services system. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-iam-roles.html">Set up permissions</a>.</p> <p>The training data must be in CSV or Parquet format. The delimiter must be a comma (,).</p> <p>You can specify the path to a specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files.</p> <p>Because dataset imports are not aggregated, your most recent dataset import is the one that is used when training a predictor or generating a forecast. Make sure that your most recent dataset import contains all of the data you want to model off of, and not just the new data collected since the previous import.</p> <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation.</p>
* [createExplainability](#createexplainability) - <note> <p>Explainability is only available for Forecasts and Predictors generated from an AutoPredictor (<a>CreateAutoPredictor</a>)</p> </note> <p>Creates an Amazon Forecast Explainability.</p> <p>Explainability helps you better understand how the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative impact of each attribute and determine whether they increase or decrease forecast values.</p> <p>To enable Forecast Explainability, your predictor must include at least one of the following: related time series, item metadata, or additional datasets like Holidays and the Weather Index.</p> <p>CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a Forecast ARN.</p> <p> <b>CreateExplainability with a Predictor ARN</b> </p> <note> <p>You can only have one Explainability resource per predictor. If you already enabled <code>ExplainPredictor</code> in <a>CreateAutoPredictor</a>, that predictor already has an Explainability resource.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the predictor.</p> </li> <li> <p> <code>TimePointGranularity</code> - Must be set to “ALL”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Must be set to “ALL”.</p> </li> </ul> <p>Do not specify a value for the following parameters:</p> <ul> <li> <p> <code>DataSource</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>Schema</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>StartDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>EndDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> </ul> <p> <b>CreateExplainability with a Forecast ARN</b> </p> <note> <p>You can specify a maximum of 50 time series and 500 time points.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the forecast.</p> </li> <li> <p> <code>TimePointGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> </ul> <p>If you set TimeSeriesGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>DataSource</code> - The S3 location of the CSV file specifying your time series.</p> </li> <li> <p> <code>Schema</code> - The Schema defines the attributes and attribute types listed in the Data Source.</p> </li> </ul> <p>If you set TimePointGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>StartDateTime</code> - The first timestamp in the range of time points.</p> </li> <li> <p> <code>EndDateTime</code> - The last timestamp in the range of time points.</p> </li> </ul>
* [createExplainabilityExport](#createexplainabilityexport) - <p>Exports an Explainability resource created by the <a>CreateExplainability</a> operation. Exported files are exported to an Amazon Simple Storage Service (Amazon S3) bucket.</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribeExplainabilityExport</a> operation.</p> </note>
* [createForecast](#createforecast) - <p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p> <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which you specify in the <a>CreatePredictor</a> request. When you query a forecast, you can request a specific date range within the forecast.</p> <p>To get a list of all your forecasts, use the <a>ListForecasts</a> operation.</p> <note> <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was used to create the predictor.</p> </note> <p>For more information, see <a>howitworks-forecast</a>.</p> <note> <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query or export the forecast. Use the <a>DescribeForecast</a> operation to get the status.</p> </note> <p>By default, a forecast includes predictions for every item (<code>item_id</code>) in the dataset group that was used to train the predictor. However, you can use the <code>TimeSeriesSelector</code> object to generate a forecast on a subset of time series. Forecast creation is skipped for any time series that you specify that are not in the input dataset. The forecast export file will not contain these time series or their forecasted values.</p>
* [createForecastExportJob](#createforecastexportjob) - <p>Exports a forecast created by the <a>CreateForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p>&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</p> <p>where the &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your forecast export jobs, use the <a>ListForecastExportJobs</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p> </note>
* [createMonitor](#createmonitor) - Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see how your predictor's performance changes over time. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring.html">Predictor Monitoring</a>. 
* [createPredictor](#createpredictor) - <note> <p> This operation creates a legacy predictor that does not include all the predictor functionalities provided by Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use <a>CreateAutoPredictor</a>.</p> </note> <p>Creates an Amazon Forecast predictor.</p> <p>In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters.</p> <p>Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the <a>CreateForecast</a> operation.</p> <p> To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation. </p> <p>You can specify a featurization configuration to fill and aggregate the data fields in the <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more information, see <a>FeaturizationConfig</a>.</p> <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the <code>DataFrequency</code> specified when the dataset was created matches the <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p> <p>By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9 (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor by setting the <code>ForecastTypes</code>. </p> <p> <b>AutoML</b> </p> <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The <code>objective function</code> is defined as the mean of the weighted losses over the forecast types. By default, these are the p10, p50, and p90 quantile losses. For more information, see <a>EvaluationResult</a>.</p> <p>When AutoML is enabled, the following properties are disallowed:</p> <ul> <li> <p> <code>AlgorithmArn</code> </p> </li> <li> <p> <code>HPOConfig</code> </p> </li> <li> <p> <code>PerformHPO</code> </p> </li> <li> <p> <code>TrainingParameters</code> </p> </li> </ul> <p>To get a list of all of your predictors, use the <a>ListPredictors</a> operation.</p> <note> <p>Before you can use the predictor to create a forecast, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>
* [createPredictorBacktestExportJob](#createpredictorbacktestexportjob) - <p>Exports backtest forecasts and accuracy metrics generated by the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. Two folders containing CSV or Parquet files are exported to your specified S3 bucket.</p> <p> The export file names will match the following conventions:</p> <p> <code>&lt;ExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;.csv</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDate format (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribePredictorBacktestExportJob</a> operation.</p> </note>
* [createWhatIfAnalysis](#createwhatifanalysis) - <p>What-if analysis is a scenario modeling technique where you make a hypothetical change to a time series and compare the forecasts generated by these changes against the baseline, unchanged time series. It is important to remember that the purpose of a what-if analysis is to understand how a forecast can change given different modifications to the baseline time series.</p> <p>For example, imagine you are a clothing retailer who is considering an end of season sale to clear space for new styles. After creating a baseline forecast, you can use a what-if analysis to investigate how different sales tactics might affect your goals.</p> <p>You could create a scenario where everything is given a 25% markdown, and another where everything is given a fixed dollar markdown. You could create a scenario where the sale lasts for one week and another where the sale lasts for one month. With a what-if analysis, you can compare many different scenarios against each other.</p> <p>Note that a what-if analysis is meant to display what the forecasting model has learned and how it will behave in the scenarios that you are evaluating. Do not blindly use the results of the what-if analysis to make business decisions. For instance, forecasts might not be accurate for novel scenarios where there is no reference available to determine whether a forecast is good.</p> <p>The <a>TimeSeriesSelector</a> object defines the items that you want in the what-if analysis.</p>
* [createWhatIfForecast](#createwhatifforecast) - A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset. 
* [createWhatIfForecastExport](#createwhatifforecastexport) - <p>Exports a forecast created by the <a>CreateWhatIfForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p> <code>≈&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your what-if forecast export jobs, use the <a>ListWhatIfForecastExports</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation.</p> </note>
* [deleteDataset](#deletedataset) - <p>Deletes an Amazon Forecast dataset that was created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. You can only delete datasets that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.</p> <note> <p>Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update the dataset group, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation, omitting the deleted dataset's ARN.</p> </note>
* [deleteDatasetGroup](#deletedatasetgroup) - <p>Deletes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. You can only delete dataset groups that have a status of <code>ACTIVE</code>, <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> <p>This operation deletes only the dataset group, not the datasets in the group.</p>
* [deleteDatasetImportJob](#deletedatasetimportjob) - Deletes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation.
* [deleteExplainability](#deleteexplainability) - <p>Deletes an Explainability resource.</p> <p>You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeExplainability</a> operation.</p>
* [deleteExplainabilityExport](#deleteexplainabilityexport) - Deletes an Explainability export.
* [deleteForecast](#deleteforecast) - <p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecast</a> operation.</p> <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you can no longer query the forecast.</p>
* [deleteForecastExportJob](#deleteforecastexportjob) - Deletes a forecast export job created using the <a>CreateForecastExportJob</a> operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.
* [deleteMonitor](#deletemonitor) - Deletes a monitor resource. You can only delete a monitor resource with a status of <code>ACTIVE</code>, <code>ACTIVE_STOPPED</code>, <code>CREATE_FAILED</code>, or <code>CREATE_STOPPED</code>.
* [deletePredictor](#deletepredictor) - Deletes a predictor created using the <a>DescribePredictor</a> or <a>CreatePredictor</a> operations. You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribePredictor</a> operation.
* [deletePredictorBacktestExportJob](#deletepredictorbacktestexportjob) - Deletes a predictor backtest export job.
* [deleteResourceTree](#deleteresourcetree) - <p>Deletes an entire resource tree. This operation will delete the parent resource and its child resources.</p> <p>Child resources are resources that were created from another resource. For example, when a forecast is generated from a predictor, the forecast is the child resource and the predictor is the parent resource.</p> <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p> <ul> <li> <p> <b>Dataset</b>: dataset import jobs</p> </li> <li> <p> <b>Dataset Group</b>: predictors, predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Predictor</b>: predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Forecast</b>: forecast export jobs</p> </li> </ul> <note> <p> <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not delete datasets or exported files stored in Amazon S3. </p> </note>
* [deleteWhatIfAnalysis](#deletewhatifanalysis) - <p>Deletes a what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation. You can delete only what-if analyses that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfAnalysis</a> operation. </p> <p>You can't delete a what-if analysis while any of its forecasts are being exported.</p>
* [deleteWhatIfForecast](#deletewhatifforecast) - <p>Deletes a what-if forecast created using the <a>CreateWhatIfForecast</a> operation. You can delete only what-if forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecast</a> operation. </p> <p>You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.</p>
* [deleteWhatIfForecastExport](#deletewhatifforecastexport) - Deletes a what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation. You can delete only what-if forecast exports that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation. 
* [describeAutoPredictor](#describeautopredictor) - Describes a predictor created using the CreateAutoPredictor operation.
* [describeDataset](#describedataset) - <p>Describes an Amazon Forecast dataset created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation.</p> <p>In addition to listing the parameters specified in the <code>CreateDataset</code> request, this operation includes the following dataset properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
* [describeDatasetGroup](#describedatasetgroup) - <p>Describes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>DatasetArns</code> - The datasets belonging to the group.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
* [describeDatasetImportJob](#describedatasetimportjob) - <p>Describes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetImportJob</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>DataSize</code> </p> </li> <li> <p> <code>FieldStatistics</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
* [describeExplainability](#describeexplainability) - Describes an Explainability resource created using the <a>CreateExplainability</a> operation.
* [describeExplainabilityExport](#describeexplainabilityexport) - Describes an Explainability export created using the <a>CreateExplainabilityExport</a> operation.
* [describeForecast](#describeforecast) - <p>Describes a forecast created using the <a>CreateForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetGroupArn</code> - The dataset group that provided the training data.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
* [describeForecastExportJob](#describeforecastexportjob) - <p>Describes a forecast export job created using the <a>CreateForecastExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreateForecastExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
* [describeMonitor](#describemonitor) - <p>Describes a monitor resource. In addition to listing the properties provided in the <a>CreateMonitor</a> request, this operation lists the following properties:</p> <ul> <li> <p> <code>Baseline</code> </p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastEvaluationTime</code> </p> </li> <li> <p> <code>LastEvaluationState</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
* [describePredictor](#describepredictor) - <note> <p> This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a legacy predictor, use <a>DescribeAutoPredictor</a>.</p> </note> <p>Describes a predictor created using the <a>CreatePredictor</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreatePredictor</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetImportJobArns</code> - The dataset import jobs used to import training data.</p> </li> <li> <p> <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were evaluated.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
* [describePredictorBacktestExportJob](#describepredictorbacktestexportjob) - <p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreatePredictorBacktestExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> (if an error occurred)</p> </li> </ul>
* [describeWhatIfAnalysis](#describewhatifanalysis) - <p>Describes the what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfAnalysis</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
* [describeWhatIfForecast](#describewhatifforecast) - <p>Describes the what-if forecast created using the <a>CreateWhatIfForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
* [describeWhatIfForecastExport](#describewhatifforecastexport) - <p>Describes the what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecastExport</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
* [getAccuracyMetrics](#getaccuracymetrics) - <p>Provides metrics on the accuracy of the models that were trained by the <a>CreatePredictor</a> operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Predictor Metrics</a>.</p> <p>This operation generates metrics for each backtest window that was evaluated. The number of backtest windows (<code>NumberOfBacktestWindows</code>) is specified using the <a>EvaluationParameters</a> object, which is optionally included in the <code>CreatePredictor</code> request. If <code>NumberOfBacktestWindows</code> isn't specified, the number defaults to one.</p> <p>The parameters of the <code>filling</code> method determine which items contribute to the metrics. If you want all items to contribute, specify <code>zero</code>. If you want only those items that have complete data in the range being evaluated to contribute, specify <code>nan</code>. For more information, see <a>FeaturizationMethod</a>.</p> <note> <p>Before you can get accuracy metrics, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>
* [listDatasetGroups](#listdatasetgroups) - Returns a list of dataset groups created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. For each dataset group, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.
* [listDatasetImportJobs](#listdatasetimportjobs) - Returns a list of dataset import jobs created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation. You can filter the list by providing an array of <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Filter.html">Filter</a> objects.
* [listDatasets](#listdatasets) - Returns a list of datasets created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties, use the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.
* [listExplainabilities](#listexplainabilities) - <p>Returns a list of Explainability resources created using the <a>CreateExplainability</a> operation. This operation returns a summary for each Explainability. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability resource, use the ARN with the <a>DescribeExplainability</a> operation.</p>
* [listExplainabilityExports](#listexplainabilityexports) - <p>Returns a list of Explainability exports created using the <a>CreateExplainabilityExport</a> operation. This operation returns a summary for each Explainability export. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability export, use the ARN with the <a>DescribeExplainability</a> operation.</p>
* [listForecastExportJobs](#listforecastexportjobs) - Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a> operation. You can filter the list using an array of <a>Filter</a> objects.
* [listForecasts](#listforecasts) - Returns a list of forecasts created using the <a>CreateForecast</a> operation. For each forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the <a>DescribeForecast</a> operation. You can filter the list using an array of <a>Filter</a> objects.
* [listMonitorEvaluations](#listmonitorevaluations) - <p>Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource during different windows of time.</p> <p>For information about monitoring see <a>predictor-monitoring</a>. For more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>
* [listMonitors](#listmonitors) - Returns a list of monitors created with the <a>CreateMonitor</a> operation and <a>CreateAutoPredictor</a> operation. For each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the <a>DescribeMonitor</a> operation.
* [listPredictorBacktestExportJobs](#listpredictorbacktestexportjobs) - <p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a summary for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular backtest export job, use the ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>
* [listPredictors](#listpredictors) - <p>Returns a list of predictors created using the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). </p> <p>You can retrieve the complete set of properties by using the ARN with the <a>DescribeAutoPredictor</a> and <a>DescribePredictor</a> operations. You can filter the list using an array of <a>Filter</a> objects.</p>
* [listTagsForResource](#listtagsforresource) - Lists the tags for an Amazon Forecast resource.
* [listWhatIfAnalyses](#listwhatifanalyses) - Returns a list of what-if analyses created using the <a>CreateWhatIfAnalysis</a> operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the <a>DescribeWhatIfAnalysis</a> operation.
* [listWhatIfForecastExports](#listwhatifforecastexports) - Returns a list of what-if forecast exports created using the <a>CreateWhatIfForecastExport</a> operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the <a>DescribeWhatIfForecastExport</a> operation.
* [listWhatIfForecasts](#listwhatifforecasts) - Returns a list of what-if forecasts created using the <a>CreateWhatIfForecast</a> operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the <a>DescribeWhatIfForecast</a> operation.
* [resumeResource](#resumeresource) - Resumes a stopped monitor resource.
* [stopResource](#stopresource) - <p>Stops a resource.</p> <p>The resource undergoes the following states: <code>CREATE_STOPPING</code> and <code>CREATE_STOPPED</code>. You cannot resume a resource once it has been stopped.</p> <p>This operation can be applied to the following resources (and their corresponding child resources):</p> <ul> <li> <p>Dataset Import Job</p> </li> <li> <p>Predictor Job</p> </li> <li> <p>Forecast Job</p> </li> <li> <p>Forecast Export Job</p> </li> <li> <p>Predictor Backtest Export Job</p> </li> <li> <p>Explainability Job</p> </li> <li> <p>Explainability Export Job</p> </li> </ul>
* [tagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
* [untagResource](#untagresource) - Deletes the specified tags from a resource.
* [updateDatasetGroup](#updatedatasetgroup) - <p>Replaces the datasets in a dataset group with the specified datasets.</p> <note> <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation to get the status.</p> </note>

## createAutoPredictor

<p>Creates an Amazon Forecast predictor.</p> <p>Amazon Forecast creates predictors with AutoPredictor, which involves applying the optimal combination of algorithms to each time series in your datasets. You can use <a>CreateAutoPredictor</a> to create new predictors or upgrade/retrain existing predictors.</p> <p> <b>Creating new predictors</b> </p> <p>The following parameters are required when creating a new predictor:</p> <ul> <li> <p> <code>PredictorName</code> - A unique name for the predictor.</p> </li> <li> <p> <code>DatasetGroupArn</code> - The ARN of the dataset group used to train the predictor.</p> </li> <li> <p> <code>ForecastFrequency</code> - The granularity of your forecasts (hourly, daily, weekly, etc).</p> </li> <li> <p> <code>ForecastHorizon</code> - The number of time-steps that the model predicts. The forecast horizon is also called the prediction length.</p> </li> </ul> <p>When creating a new predictor, do not specify a value for <code>ReferencePredictorArn</code>.</p> <p> <b>Upgrading and retraining predictors</b> </p> <p>The following parameters are required when retraining or upgrading a predictor:</p> <ul> <li> <p> <code>PredictorName</code> - A unique name for the predictor.</p> </li> <li> <p> <code>ReferencePredictorArn</code> - The ARN of the predictor to retrain or upgrade.</p> </li> </ul> <p>When upgrading or retraining a predictor, only specify values for the <code>ReferencePredictorArn</code> and <code>PredictorName</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAutoPredictorRequest;
import org.openapis.openapi.models.operations.CreateAutoPredictorResponse;
import org.openapis.openapi.models.operations.CreateAutoPredictorXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdditionalDataset;
import org.openapis.openapi.models.shared.AttributeConfig;
import org.openapis.openapi.models.shared.CreateAutoPredictorRequest;
import org.openapis.openapi.models.shared.DataConfig;
import org.openapis.openapi.models.shared.DayOfWeekEnum;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.MonitorConfig;
import org.openapis.openapi.models.shared.MonthEnum;
import org.openapis.openapi.models.shared.OptimizationMetricEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TimeAlignmentBoundary;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAutoPredictorRequest req = new CreateAutoPredictorRequest(                new CreateAutoPredictorRequest("ipsum") {{
                                dataConfig = new DataConfig("quidem") {{
                                    additionalDatasets = new org.openapis.openapi.models.shared.AdditionalDataset[]{{
                                        add(new AdditionalDataset("explicabo") {{
                                            configuration = new java.util.HashMap<String, String[]>() {{
                                                put("pariatur", new String[]{{
                                                    add("praesentium"),
                                                    add("rem"),
                                                }});
                                                put("voluptates", new String[]{{
                                                    add("repudiandae"),
                                                }});
                                                put("sint", new String[]{{
                                                    add("itaque"),
                                                }});
                                            }};
                                            name = "Erin Altenwerth";
                                        }}),
                                        add(new AdditionalDataset("labore") {{
                                            configuration = new java.util.HashMap<String, String[]>() {{
                                                put("distinctio", new String[]{{
                                                    add("labore"),
                                                    add("modi"),
                                                    add("qui"),
                                                    add("aliquid"),
                                                }});
                                                put("cupiditate", new String[]{{
                                                    add("perferendis"),
                                                    add("magni"),
                                                    add("assumenda"),
                                                }});
                                                put("ipsam", new String[]{{
                                                    add("fugit"),
                                                }});
                                            }};
                                            name = "Marshall Glover";
                                        }}),
                                        add(new AdditionalDataset("facere") {{
                                            configuration = new java.util.HashMap<String, String[]>() {{
                                                put("eum", new String[]{{
                                                    add("eligendi"),
                                                }});
                                                put("sint", new String[]{{
                                                    add("provident"),
                                                    add("necessitatibus"),
                                                }});
                                                put("sint", new String[]{{
                                                    add("dolor"),
                                                    add("debitis"),
                                                    add("a"),
                                                }});
                                                put("dolorum", new String[]{{
                                                    add("in"),
                                                    add("illum"),
                                                }});
                                            }};
                                            name = "Jean Buckridge";
                                        }}),
                                    }};
                                    attributeConfigs = new org.openapis.openapi.models.shared.AttributeConfig[]{{
                                        add(new AttributeConfig("quidem",                 new java.util.HashMap<String, String>() {{
                                                            put("nam", "id");
                                                            put("blanditiis", "deleniti");
                                                            put("sapiente", "amet");
                                                        }}) {{
                                            attributeName = "aliquid";
                                            transformations = new java.util.HashMap<String, String>() {{
                                                put("accusamus", "non");
                                                put("occaecati", "enim");
                                                put("accusamus", "delectus");
                                            }};
                                        }}),
                                        add(new AttributeConfig("perferendis",                 new java.util.HashMap<String, String>() {{
                                                            put("magnam", "distinctio");
                                                            put("id", "labore");
                                                        }}) {{
                                            attributeName = "deserunt";
                                            transformations = new java.util.HashMap<String, String>() {{
                                                put("vel", "natus");
                                                put("omnis", "molestiae");
                                            }};
                                        }}),
                                    }};
                                }};;
                                encryptionConfig = new EncryptionConfig("labore", "suscipit");;
                                explainPredictor = false;
                                forecastDimensions = new String[]{{
                                    add("nobis"),
                                    add("eum"),
                                    add("vero"),
                                }};
                                forecastFrequency = "aspernatur";
                                forecastHorizon = 102863L;
                                forecastTypes = new String[]{{
                                    add("et"),
                                    add("excepturi"),
                                }};
                                monitorConfig = new MonitorConfig("ullam");;
                                optimizationMetric = OptimizationMetricEnum.AVERAGE_WEIGHTED_QUANTILE_LOSS;
                                referencePredictorArn = "quos";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("reiciendis", "mollitia") {{
                                        key = "accusantium";
                                        value = "mollitia";
                                    }}),
                                    add(new Tag("dolor", "necessitatibus") {{
                                        key = "ad";
                                        value = "eum";
                                    }}),
                                    add(new Tag("quasi", "iure") {{
                                        key = "odit";
                                        value = "nemo";
                                    }}),
                                }};
                                timeAlignmentBoundary = new TimeAlignmentBoundary() {{
                                    dayOfMonth = 984043L;
                                    dayOfWeek = DayOfWeekEnum.SUNDAY;
                                    hour = 260341L;
                                    month = MonthEnum.OCTOBER;
                                }};;
                            }};, CreateAutoPredictorXAmzTargetEnum.AMAZON_FORECAST_CREATE_AUTO_PREDICTOR) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "in";
                xAmzDate = "architecto";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "ullam";
            }};            

            CreateAutoPredictorResponse res = sdk.sdk.createAutoPredictor(req);

            if (res.createAutoPredictorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataset

<p>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:</p> <ul> <li> <p> <i> <code>DataFrequency</code> </i> - How frequently your historical time-series data is collected.</p> </li> <li> <p> <i> <code>Domain</code> </i> and <i> <code>DatasetType</code> </i> - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields.</p> </li> <li> <p> <i> <code>Schema</code> </i> - A schema specifies the fields in the dataset, including the field name and data type.</p> </li> </ul> <p>After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Importing datasets</a>.</p> <p>To get a list of all your datasets, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation.</p> <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub repository</a>.</p> <note> <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import training data. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation to get the status.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatasetRequest;
import org.openapis.openapi.models.operations.CreateDatasetResponse;
import org.openapis.openapi.models.operations.CreateDatasetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeTypeEnum;
import org.openapis.openapi.models.shared.CreateDatasetRequest;
import org.openapis.openapi.models.shared.DatasetTypeEnum;
import org.openapis.openapi.models.shared.DomainEnum;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.Schema;
import org.openapis.openapi.models.shared.SchemaAttribute;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatasetRequest req = new CreateDatasetRequest(                new CreateDatasetRequest("nihil", DatasetTypeEnum.ITEM_METADATA, DomainEnum.WEB_TRAFFIC,                 new Schema() {{
                                                attributes = new org.openapis.openapi.models.shared.SchemaAttribute[]{{
                                                    add(new SchemaAttribute() {{
                                                        attributeName = "saepe";
                                                        attributeType = AttributeTypeEnum.GEOLOCATION;
                                                    }}),
                                                }};
                                            }};) {{
                                dataFrequency = "accusantium";
                                encryptionConfig = new EncryptionConfig("consequuntur", "praesentium");;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quo", "illum") {{
                                        key = "magni";
                                        value = "sunt";
                                    }}),
                                    add(new Tag("ea", "excepturi") {{
                                        key = "pariatur";
                                        value = "maxime";
                                    }}),
                                    add(new Tag("accusantium", "ab") {{
                                        key = "odit";
                                        value = "ea";
                                    }}),
                                }};
                            }};, CreateDatasetXAmzTargetEnum.AMAZON_FORECAST_CREATE_DATASET) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "ipsam";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "eaque";
            }};            

            CreateDatasetResponse res = sdk.sdk.createDataset(req);

            if (res.createDatasetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDatasetGroup

<p>Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation.</p> <p>After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Dataset groups</a>.</p> <p>To get a list of all your datasets groups, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation.</p> <note> <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatasetGroupRequest;
import org.openapis.openapi.models.operations.CreateDatasetGroupResponse;
import org.openapis.openapi.models.operations.CreateDatasetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDatasetGroupRequest;
import org.openapis.openapi.models.shared.DomainEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatasetGroupRequest req = new CreateDatasetGroupRequest(                new CreateDatasetGroupRequest("nemo", DomainEnum.METRICS) {{
                                datasetArns = new String[]{{
                                    add("fugiat"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("corporis", "hic") {{
                                        key = "aut";
                                        value = "cumque";
                                    }}),
                                }};
                            }};, CreateDatasetGroupXAmzTargetEnum.AMAZON_FORECAST_CREATE_DATASET_GROUP) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "dolores";
                xAmzDate = "quis";
                xAmzSecurityToken = "totam";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "eaque";
            }};            

            CreateDatasetGroupResponse res = sdk.sdk.createDatasetGroup(req);

            if (res.createDatasetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDatasetImportJob

<p>Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to.</p> <p>You must specify a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DataSource.html">DataSource</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an internal Amazon Web Services system. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-iam-roles.html">Set up permissions</a>.</p> <p>The training data must be in CSV or Parquet format. The delimiter must be a comma (,).</p> <p>You can specify the path to a specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files.</p> <p>Because dataset imports are not aggregated, your most recent dataset import is the one that is used when training a predictor or generating a forecast. Make sure that your most recent dataset import contains all of the data you want to model off of, and not just the new data collected since the previous import.</p> <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatasetImportJobRequest;
import org.openapis.openapi.models.operations.CreateDatasetImportJobResponse;
import org.openapis.openapi.models.operations.CreateDatasetImportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDatasetImportJobRequest;
import org.openapis.openapi.models.shared.DataSource;
import org.openapis.openapi.models.shared.ImportModeEnum;
import org.openapis.openapi.models.shared.S3Config;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatasetImportJobRequest req = new CreateDatasetImportJobRequest(                new CreateDatasetImportJobRequest(                new DataSource(                new S3Config("nesciunt", "eos") {{
                                                                kmsKeyArn = "perferendis";
                                                            }};);, "dolores", "minus") {{
                                format = "quam";
                                geolocationFormat = "dolor";
                                importMode = ImportModeEnum.INCREMENTAL;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("omnis", "facilis") {{
                                        key = "hic";
                                        value = "recusandae";
                                    }}),
                                    add(new Tag("porro", "consequuntur") {{
                                        key = "perspiciatis";
                                        value = "voluptatem";
                                    }}),
                                }};
                                timeZone = "blanditiis";
                                timestampFormat = "error";
                                useGeolocationForTimeZone = false;
                            }};, CreateDatasetImportJobXAmzTargetEnum.AMAZON_FORECAST_CREATE_DATASET_IMPORT_JOB) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "rerum";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "modi";
            }};            

            CreateDatasetImportJobResponse res = sdk.sdk.createDatasetImportJob(req);

            if (res.createDatasetImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createExplainability

<note> <p>Explainability is only available for Forecasts and Predictors generated from an AutoPredictor (<a>CreateAutoPredictor</a>)</p> </note> <p>Creates an Amazon Forecast Explainability.</p> <p>Explainability helps you better understand how the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative impact of each attribute and determine whether they increase or decrease forecast values.</p> <p>To enable Forecast Explainability, your predictor must include at least one of the following: related time series, item metadata, or additional datasets like Holidays and the Weather Index.</p> <p>CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a Forecast ARN.</p> <p> <b>CreateExplainability with a Predictor ARN</b> </p> <note> <p>You can only have one Explainability resource per predictor. If you already enabled <code>ExplainPredictor</code> in <a>CreateAutoPredictor</a>, that predictor already has an Explainability resource.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the predictor.</p> </li> <li> <p> <code>TimePointGranularity</code> - Must be set to “ALL”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Must be set to “ALL”.</p> </li> </ul> <p>Do not specify a value for the following parameters:</p> <ul> <li> <p> <code>DataSource</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>Schema</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>StartDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>EndDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> </ul> <p> <b>CreateExplainability with a Forecast ARN</b> </p> <note> <p>You can specify a maximum of 50 time series and 500 time points.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the forecast.</p> </li> <li> <p> <code>TimePointGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> </ul> <p>If you set TimeSeriesGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>DataSource</code> - The S3 location of the CSV file specifying your time series.</p> </li> <li> <p> <code>Schema</code> - The Schema defines the attributes and attribute types listed in the Data Source.</p> </li> </ul> <p>If you set TimePointGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>StartDateTime</code> - The first timestamp in the range of time points.</p> </li> <li> <p> <code>EndDateTime</code> - The last timestamp in the range of time points.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExplainabilityRequest;
import org.openapis.openapi.models.operations.CreateExplainabilityResponse;
import org.openapis.openapi.models.operations.CreateExplainabilityXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeTypeEnum;
import org.openapis.openapi.models.shared.CreateExplainabilityRequest;
import org.openapis.openapi.models.shared.DataSource;
import org.openapis.openapi.models.shared.ExplainabilityConfig;
import org.openapis.openapi.models.shared.S3Config;
import org.openapis.openapi.models.shared.Schema;
import org.openapis.openapi.models.shared.SchemaAttribute;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TimePointGranularityEnum;
import org.openapis.openapi.models.shared.TimeSeriesGranularityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateExplainabilityRequest req = new CreateExplainabilityRequest(                new CreateExplainabilityRequest(                new ExplainabilityConfig(TimePointGranularityEnum.SPECIFIC, TimeSeriesGranularityEnum.SPECIFIC);, "pariatur", "provident") {{
                                dataSource = new DataSource(                new S3Config("nobis", "libero") {{
                                                    kmsKeyArn = "delectus";
                                                }};);;
                                enableVisualization = false;
                                endDateTime = "quaerat";
                                schema = new Schema() {{
                                    attributes = new org.openapis.openapi.models.shared.SchemaAttribute[]{{
                                        add(new SchemaAttribute() {{
                                            attributeName = "aliquid";
                                            attributeType = AttributeTypeEnum.INTEGER;
                                        }}),
                                        add(new SchemaAttribute() {{
                                            attributeName = "dolorem";
                                            attributeType = AttributeTypeEnum.INTEGER;
                                        }}),
                                        add(new SchemaAttribute() {{
                                            attributeName = "qui";
                                            attributeType = AttributeTypeEnum.INTEGER;
                                        }}),
                                    }};
                                }};;
                                startDateTime = "hic";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("dignissimos", "reiciendis") {{
                                        key = "cum";
                                        value = "voluptate";
                                    }}),
                                    add(new Tag("numquam", "veritatis") {{
                                        key = "amet";
                                        value = "dolorum";
                                    }}),
                                    add(new Tag("iure", "odio") {{
                                        key = "ipsa";
                                        value = "ipsa";
                                    }}),
                                }};
                            }};, CreateExplainabilityXAmzTargetEnum.AMAZON_FORECAST_CREATE_EXPLAINABILITY) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "quidem";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "eos";
            }};            

            CreateExplainabilityResponse res = sdk.sdk.createExplainability(req);

            if (res.createExplainabilityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createExplainabilityExport

<p>Exports an Explainability resource created by the <a>CreateExplainability</a> operation. Exported files are exported to an Amazon Simple Storage Service (Amazon S3) bucket.</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribeExplainabilityExport</a> operation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExplainabilityExportRequest;
import org.openapis.openapi.models.operations.CreateExplainabilityExportResponse;
import org.openapis.openapi.models.operations.CreateExplainabilityExportXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateExplainabilityExportRequest;
import org.openapis.openapi.models.shared.DataDestination;
import org.openapis.openapi.models.shared.S3Config;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateExplainabilityExportRequest req = new CreateExplainabilityExportRequest(                new CreateExplainabilityExportRequest(                new DataDestination(                new S3Config("sit", "fugiat") {{
                                                                kmsKeyArn = "ab";
                                                            }};);, "soluta", "dolorum") {{
                                format = "iusto";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("omnis", "necessitatibus") {{
                                        key = "dolorum";
                                        value = "deleniti";
                                    }}),
                                    add(new Tag("nihil", "ipsum") {{
                                        key = "distinctio";
                                        value = "asperiores";
                                    }}),
                                }};
                            }};, CreateExplainabilityExportXAmzTargetEnum.AMAZON_FORECAST_CREATE_EXPLAINABILITY_EXPORT) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "id";
                xAmzCredential = "saepe";
                xAmzDate = "eius";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "amet";
            }};            

            CreateExplainabilityExportResponse res = sdk.sdk.createExplainabilityExport(req);

            if (res.createExplainabilityExportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createForecast

<p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p> <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which you specify in the <a>CreatePredictor</a> request. When you query a forecast, you can request a specific date range within the forecast.</p> <p>To get a list of all your forecasts, use the <a>ListForecasts</a> operation.</p> <note> <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was used to create the predictor.</p> </note> <p>For more information, see <a>howitworks-forecast</a>.</p> <note> <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query or export the forecast. Use the <a>DescribeForecast</a> operation to get the status.</p> </note> <p>By default, a forecast includes predictions for every item (<code>item_id</code>) in the dataset group that was used to train the predictor. However, you can use the <code>TimeSeriesSelector</code> object to generate a forecast on a subset of time series. Forecast creation is skipped for any time series that you specify that are not in the input dataset. The forecast export file will not contain these time series or their forecasted values.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateForecastRequest;
import org.openapis.openapi.models.operations.CreateForecastResponse;
import org.openapis.openapi.models.operations.CreateForecastXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeTypeEnum;
import org.openapis.openapi.models.shared.CreateForecastRequest;
import org.openapis.openapi.models.shared.DataSource;
import org.openapis.openapi.models.shared.S3Config;
import org.openapis.openapi.models.shared.Schema;
import org.openapis.openapi.models.shared.SchemaAttribute;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TimeSeriesIdentifiers;
import org.openapis.openapi.models.shared.TimeSeriesSelector;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateForecastRequest req = new CreateForecastRequest(                new CreateForecastRequest("accusamus", "ad") {{
                                forecastTypes = new String[]{{
                                    add("suscipit"),
                                    add("deserunt"),
                                    add("provident"),
                                    add("minima"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("alias", "at") {{
                                        key = "totam";
                                        value = "similique";
                                    }}),
                                    add(new Tag("vel", "quod") {{
                                        key = "quaerat";
                                        value = "tempora";
                                    }}),
                                    add(new Tag("dolorum", "a") {{
                                        key = "officiis";
                                        value = "qui";
                                    }}),
                                    add(new Tag("iusto", "ipsum") {{
                                        key = "esse";
                                        value = "harum";
                                    }}),
                                }};
                                timeSeriesSelector = new TimeSeriesSelector() {{
                                    timeSeriesIdentifiers = new TimeSeriesIdentifiers() {{
                                        dataSource = new DataSource(                new S3Config("quisquam", "tenetur") {{
                                                            kmsKeyArn = "amet";
                                                        }};);;
                                        format = "tempore";
                                        schema = new Schema() {{
                                            attributes = new org.openapis.openapi.models.shared.SchemaAttribute[]{{
                                                add(new SchemaAttribute() {{
                                                    attributeName = "numquam";
                                                    attributeType = AttributeTypeEnum.INTEGER;
                                                }}),
                                                add(new SchemaAttribute() {{
                                                    attributeName = "dolorem";
                                                    attributeType = AttributeTypeEnum.GEOLOCATION;
                                                }}),
                                                add(new SchemaAttribute() {{
                                                    attributeName = "totam";
                                                    attributeType = AttributeTypeEnum.FLOAT;
                                                }}),
                                                add(new SchemaAttribute() {{
                                                    attributeName = "sit";
                                                    attributeType = AttributeTypeEnum.TIMESTAMP;
                                                }}),
                                            }};
                                        }};;
                                    }};;
                                }};;
                            }};, CreateForecastXAmzTargetEnum.AMAZON_FORECAST_CREATE_FORECAST) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "sed";
                xAmzCredential = "vel";
                xAmzDate = "libero";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "quam";
            }};            

            CreateForecastResponse res = sdk.sdk.createForecast(req);

            if (res.createForecastResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createForecastExportJob

<p>Exports a forecast created by the <a>CreateForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p>&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</p> <p>where the &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your forecast export jobs, use the <a>ListForecastExportJobs</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateForecastExportJobRequest;
import org.openapis.openapi.models.operations.CreateForecastExportJobResponse;
import org.openapis.openapi.models.operations.CreateForecastExportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateForecastExportJobRequest;
import org.openapis.openapi.models.shared.DataDestination;
import org.openapis.openapi.models.shared.S3Config;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateForecastExportJobRequest req = new CreateForecastExportJobRequest(                new CreateForecastExportJobRequest(                new DataDestination(                new S3Config("incidunt", "qui") {{
                                                                kmsKeyArn = "cupiditate";
                                                            }};);, "maxime", "pariatur") {{
                                format = "soluta";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("incidunt", "aspernatur") {{
                                        key = "laborum";
                                        value = "totam";
                                    }}),
                                }};
                            }};, CreateForecastExportJobXAmzTargetEnum.AMAZON_FORECAST_CREATE_FORECAST_EXPORT_JOB) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "facilis";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "temporibus";
            }};            

            CreateForecastExportJobResponse res = sdk.sdk.createForecastExportJob(req);

            if (res.createForecastExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMonitor

Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see how your predictor's performance changes over time. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring.html">Predictor Monitoring</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMonitorRequest;
import org.openapis.openapi.models.operations.CreateMonitorResponse;
import org.openapis.openapi.models.operations.CreateMonitorXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateMonitorRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMonitorRequest req = new CreateMonitorRequest(                new CreateMonitorRequest("neque", "fugit") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("ullam", "nam") {{
                                        key = "odio";
                                        value = "sunt";
                                    }}),
                                }};
                            }};, CreateMonitorXAmzTargetEnum.AMAZON_FORECAST_CREATE_MONITOR) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "cumque";
                xAmzDate = "soluta";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "et";
                xAmzSignedHeaders = "saepe";
            }};            

            CreateMonitorResponse res = sdk.sdk.createMonitor(req);

            if (res.createMonitorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPredictor

<note> <p> This operation creates a legacy predictor that does not include all the predictor functionalities provided by Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use <a>CreateAutoPredictor</a>.</p> </note> <p>Creates an Amazon Forecast predictor.</p> <p>In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters.</p> <p>Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the <a>CreateForecast</a> operation.</p> <p> To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation. </p> <p>You can specify a featurization configuration to fill and aggregate the data fields in the <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more information, see <a>FeaturizationConfig</a>.</p> <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the <code>DataFrequency</code> specified when the dataset was created matches the <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p> <p>By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9 (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor by setting the <code>ForecastTypes</code>. </p> <p> <b>AutoML</b> </p> <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The <code>objective function</code> is defined as the mean of the weighted losses over the forecast types. By default, these are the p10, p50, and p90 quantile losses. For more information, see <a>EvaluationResult</a>.</p> <p>When AutoML is enabled, the following properties are disallowed:</p> <ul> <li> <p> <code>AlgorithmArn</code> </p> </li> <li> <p> <code>HPOConfig</code> </p> </li> <li> <p> <code>PerformHPO</code> </p> </li> <li> <p> <code>TrainingParameters</code> </p> </li> </ul> <p>To get a list of all of your predictors, use the <a>ListPredictors</a> operation.</p> <note> <p>Before you can use the predictor to create a forecast, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePredictorRequest;
import org.openapis.openapi.models.operations.CreatePredictorResponse;
import org.openapis.openapi.models.operations.CreatePredictorXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoMLOverrideStrategyEnum;
import org.openapis.openapi.models.shared.CategoricalParameterRange;
import org.openapis.openapi.models.shared.ContinuousParameterRange;
import org.openapis.openapi.models.shared.CreatePredictorRequest;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.EvaluationParameters;
import org.openapis.openapi.models.shared.Featurization;
import org.openapis.openapi.models.shared.FeaturizationConfig;
import org.openapis.openapi.models.shared.FeaturizationMethod;
import org.openapis.openapi.models.shared.FeaturizationMethodNameEnum;
import org.openapis.openapi.models.shared.HyperParameterTuningJobConfig;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.IntegerParameterRange;
import org.openapis.openapi.models.shared.OptimizationMetricEnum;
import org.openapis.openapi.models.shared.ParameterRanges;
import org.openapis.openapi.models.shared.ScalingTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SupplementaryFeature;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePredictorRequest req = new CreatePredictorRequest(                new CreatePredictorRequest(                new FeaturizationConfig("veritatis") {{
                                                featurizations = new org.openapis.openapi.models.shared.Featurization[]{{
                                                    add(new Featurization("qui") {{
                                                        attributeName = "quos";
                                                        featurizationPipeline = new org.openapis.openapi.models.shared.FeaturizationMethod[]{{
                                                            add(new FeaturizationMethod(FeaturizationMethodNameEnum.FILLING) {{
                                                                featurizationMethodName = FeaturizationMethodNameEnum.FILLING;
                                                                featurizationMethodParameters = new java.util.HashMap<String, String>() {{
                                                                    put("aperiam", "delectus");
                                                                    put("dolorem", "dolore");
                                                                    put("labore", "adipisci");
                                                                }};
                                                            }}),
                                                            add(new FeaturizationMethod(FeaturizationMethodNameEnum.FILLING) {{
                                                                featurizationMethodName = FeaturizationMethodNameEnum.FILLING;
                                                                featurizationMethodParameters = new java.util.HashMap<String, String>() {{
                                                                    put("architecto", "quae");
                                                                    put("aut", "quas");
                                                                    put("itaque", "consequatur");
                                                                }};
                                                            }}),
                                                            add(new FeaturizationMethod(FeaturizationMethodNameEnum.FILLING) {{
                                                                featurizationMethodName = FeaturizationMethodNameEnum.FILLING;
                                                                featurizationMethodParameters = new java.util.HashMap<String, String>() {{
                                                                    put("repellendus", "porro");
                                                                    put("doloribus", "ut");
                                                                    put("facilis", "cupiditate");
                                                                }};
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new Featurization("ducimus") {{
                                                        attributeName = "quae";
                                                        featurizationPipeline = new org.openapis.openapi.models.shared.FeaturizationMethod[]{{
                                                            add(new FeaturizationMethod(FeaturizationMethodNameEnum.FILLING) {{
                                                                featurizationMethodName = FeaturizationMethodNameEnum.FILLING;
                                                                featurizationMethodParameters = new java.util.HashMap<String, String>() {{
                                                                    put("occaecati", "voluptatibus");
                                                                    put("quisquam", "vero");
                                                                }};
                                                            }}),
                                                            add(new FeaturizationMethod(FeaturizationMethodNameEnum.FILLING) {{
                                                                featurizationMethodName = FeaturizationMethodNameEnum.FILLING;
                                                                featurizationMethodParameters = new java.util.HashMap<String, String>() {{
                                                                    put("quis", "ipsum");
                                                                    put("delectus", "voluptate");
                                                                    put("consectetur", "vero");
                                                                }};
                                                            }}),
                                                            add(new FeaturizationMethod(FeaturizationMethodNameEnum.FILLING) {{
                                                                featurizationMethodName = FeaturizationMethodNameEnum.FILLING;
                                                                featurizationMethodParameters = new java.util.HashMap<String, String>() {{
                                                                    put("dignissimos", "hic");
                                                                    put("distinctio", "quod");
                                                                    put("odio", "similique");
                                                                    put("facilis", "vero");
                                                                }};
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new Featurization("dolor") {{
                                                        attributeName = "dolore";
                                                        featurizationPipeline = new org.openapis.openapi.models.shared.FeaturizationMethod[]{{
                                                            add(new FeaturizationMethod(FeaturizationMethodNameEnum.FILLING) {{
                                                                featurizationMethodName = FeaturizationMethodNameEnum.FILLING;
                                                                featurizationMethodParameters = new java.util.HashMap<String, String>() {{
                                                                    put("sequi", "natus");
                                                                    put("impedit", "aut");
                                                                    put("voluptatibus", "exercitationem");
                                                                    put("nulla", "fugit");
                                                                }};
                                                            }}),
                                                            add(new FeaturizationMethod(FeaturizationMethodNameEnum.FILLING) {{
                                                                featurizationMethodName = FeaturizationMethodNameEnum.FILLING;
                                                                featurizationMethodParameters = new java.util.HashMap<String, String>() {{
                                                                    put("maiores", "doloribus");
                                                                    put("iusto", "eligendi");
                                                                    put("ducimus", "alias");
                                                                    put("officia", "tempora");
                                                                }};
                                                            }}),
                                                            add(new FeaturizationMethod(FeaturizationMethodNameEnum.FILLING) {{
                                                                featurizationMethodName = FeaturizationMethodNameEnum.FILLING;
                                                                featurizationMethodParameters = new java.util.HashMap<String, String>() {{
                                                                    put("ea", "aspernatur");
                                                                    put("vel", "possimus");
                                                                }};
                                                            }}),
                                                            add(new FeaturizationMethod(FeaturizationMethodNameEnum.FILLING) {{
                                                                featurizationMethodName = FeaturizationMethodNameEnum.FILLING;
                                                                featurizationMethodParameters = new java.util.HashMap<String, String>() {{
                                                                    put("ratione", "ex");
                                                                    put("laudantium", "dicta");
                                                                }};
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                forecastDimensions = new String[]{{
                                                    add("quasi"),
                                                    add("ex"),
                                                    add("nulla"),
                                                    add("excepturi"),
                                                }};
                                            }};, 972920L,                 new InputDataConfig("nostrum") {{
                                                supplementaryFeatures = new org.openapis.openapi.models.shared.SupplementaryFeature[]{{
                                                    add(new SupplementaryFeature("aliquid", "inventore") {{
                                                        name = "Elbert Jenkins";
                                                        value = "veniam";
                                                    }}),
                                                    add(new SupplementaryFeature("minima", "eaque") {{
                                                        name = "Rosemary Ryan";
                                                        value = "aspernatur";
                                                    }}),
                                                    add(new SupplementaryFeature("fugit", "accusamus") {{
                                                        name = "Ms. Marco Ankunding";
                                                        value = "aliquam";
                                                    }}),
                                                    add(new SupplementaryFeature("velit", "eum") {{
                                                        name = "Ellen Borer";
                                                        value = "placeat";
                                                    }}),
                                                }};
                                            }};, "autem") {{
                                algorithmArn = "nobis";
                                autoMLOverrideStrategy = AutoMLOverrideStrategyEnum.ACCURACY_OPTIMIZED;
                                encryptionConfig = new EncryptionConfig("assumenda", "nulla");;
                                evaluationParameters = new EvaluationParameters() {{
                                    backTestWindowOffset = 379034L;
                                    numberOfBacktestWindows = 727044L;
                                }};;
                                forecastTypes = new String[]{{
                                    add("tempora"),
                                }};
                                hpoConfig = new HyperParameterTuningJobConfig() {{
                                    parameterRanges = new ParameterRanges() {{
                                        categoricalParameterRanges = new org.openapis.openapi.models.shared.CategoricalParameterRange[]{{
                                            add(new CategoricalParameterRange("esse",                 new String[]{{
                                                                add("fuga"),
                                                                add("reprehenderit"),
                                                                add("quidem"),
                                                            }}) {{
                                                name = "Ramona Bednar";
                                                values = new String[]{{
                                                    add("eius"),
                                                    add("esse"),
                                                }};
                                            }}),
                                            add(new CategoricalParameterRange("quisquam",                 new String[]{{
                                                                add("ipsa"),
                                                            }}) {{
                                                name = "Bernard Kerluke";
                                                values = new String[]{{
                                                    add("praesentium"),
                                                }};
                                            }}),
                                        }};
                                        continuousParameterRanges = new org.openapis.openapi.models.shared.ContinuousParameterRange[]{{
                                            add(new ContinuousParameterRange(3738.13, 698.59, "cupiditate") {{
                                                maxValue = 6969.97;
                                                minValue = 2065.94;
                                                name = "Dallas Sanford";
                                                scalingType = ScalingTypeEnum.AUTO;
                                            }}),
                                            add(new ContinuousParameterRange(9251.64, 446.12, "distinctio") {{
                                                maxValue = 96.88;
                                                minValue = 2728.22;
                                                name = "Roberto Collier";
                                                scalingType = ScalingTypeEnum.LINEAR;
                                            }}),
                                            add(new ContinuousParameterRange(5775.43, 4145.67, "sapiente") {{
                                                maxValue = 7997.96;
                                                minValue = 4908.19;
                                                name = "Jackie Leannon";
                                                scalingType = ScalingTypeEnum.LINEAR;
                                            }}),
                                        }};
                                        integerParameterRanges = new org.openapis.openapi.models.shared.IntegerParameterRange[]{{
                                            add(new IntegerParameterRange(536178L, 143829L, "fuga") {{
                                                maxValue = 645570L;
                                                minValue = 475289L;
                                                name = "Robyn Keeling";
                                                scalingType = ScalingTypeEnum.AUTO;
                                            }}),
                                        }};
                                    }};;
                                }};;
                                optimizationMetric = OptimizationMetricEnum.MASE;
                                performAutoML = false;
                                performHPO = false;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("minima", "nisi") {{
                                        key = "atque";
                                        value = "explicabo";
                                    }}),
                                    add(new Tag("consequuntur", "ratione") {{
                                        key = "fugit";
                                        value = "sapiente";
                                    }}),
                                }};
                                trainingParameters = new java.util.HashMap<String, String>() {{
                                    put("saepe", "occaecati");
                                }};
                            }};, CreatePredictorXAmzTargetEnum.AMAZON_FORECAST_CREATE_PREDICTOR) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "et";
                xAmzCredential = "esse";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "esse";
            }};            

            CreatePredictorResponse res = sdk.sdk.createPredictor(req);

            if (res.createPredictorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPredictorBacktestExportJob

<p>Exports backtest forecasts and accuracy metrics generated by the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. Two folders containing CSV or Parquet files are exported to your specified S3 bucket.</p> <p> The export file names will match the following conventions:</p> <p> <code>&lt;ExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;.csv</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDate format (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribePredictorBacktestExportJob</a> operation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePredictorBacktestExportJobRequest;
import org.openapis.openapi.models.operations.CreatePredictorBacktestExportJobResponse;
import org.openapis.openapi.models.operations.CreatePredictorBacktestExportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePredictorBacktestExportJobRequest;
import org.openapis.openapi.models.shared.DataDestination;
import org.openapis.openapi.models.shared.S3Config;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePredictorBacktestExportJobRequest req = new CreatePredictorBacktestExportJobRequest(                new CreatePredictorBacktestExportJobRequest(                new DataDestination(                new S3Config("nam", "vero") {{
                                                                kmsKeyArn = "aliquid";
                                                            }};);, "quasi", "saepe") {{
                                format = "vel";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("occaecati", "minima") {{
                                        key = "molestiae";
                                        value = "rerum";
                                    }}),
                                    add(new Tag("sit", "culpa") {{
                                        key = "distinctio";
                                        value = "eligendi";
                                    }}),
                                    add(new Tag("cumque", "consequuntur") {{
                                        key = "tempore";
                                        value = "adipisci";
                                    }}),
                                }};
                            }};, CreatePredictorBacktestExportJobXAmzTargetEnum.AMAZON_FORECAST_CREATE_PREDICTOR_BACKTEST_EXPORT_JOB) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "minus";
                xAmzCredential = "quaerat";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "blanditiis";
            }};            

            CreatePredictorBacktestExportJobResponse res = sdk.sdk.createPredictorBacktestExportJob(req);

            if (res.createPredictorBacktestExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWhatIfAnalysis

<p>What-if analysis is a scenario modeling technique where you make a hypothetical change to a time series and compare the forecasts generated by these changes against the baseline, unchanged time series. It is important to remember that the purpose of a what-if analysis is to understand how a forecast can change given different modifications to the baseline time series.</p> <p>For example, imagine you are a clothing retailer who is considering an end of season sale to clear space for new styles. After creating a baseline forecast, you can use a what-if analysis to investigate how different sales tactics might affect your goals.</p> <p>You could create a scenario where everything is given a 25% markdown, and another where everything is given a fixed dollar markdown. You could create a scenario where the sale lasts for one week and another where the sale lasts for one month. With a what-if analysis, you can compare many different scenarios against each other.</p> <p>Note that a what-if analysis is meant to display what the forecasting model has learned and how it will behave in the scenarios that you are evaluating. Do not blindly use the results of the what-if analysis to make business decisions. For instance, forecasts might not be accurate for novel scenarios where there is no reference available to determine whether a forecast is good.</p> <p>The <a>TimeSeriesSelector</a> object defines the items that you want in the what-if analysis.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWhatIfAnalysisRequest;
import org.openapis.openapi.models.operations.CreateWhatIfAnalysisResponse;
import org.openapis.openapi.models.operations.CreateWhatIfAnalysisXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeTypeEnum;
import org.openapis.openapi.models.shared.CreateWhatIfAnalysisRequest;
import org.openapis.openapi.models.shared.DataSource;
import org.openapis.openapi.models.shared.S3Config;
import org.openapis.openapi.models.shared.Schema;
import org.openapis.openapi.models.shared.SchemaAttribute;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TimeSeriesIdentifiers;
import org.openapis.openapi.models.shared.TimeSeriesSelector;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWhatIfAnalysisRequest req = new CreateWhatIfAnalysisRequest(                new CreateWhatIfAnalysisRequest("a", "nulla") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("a", "error") {{
                                        key = "esse";
                                        value = "quasi";
                                    }}),
                                    add(new Tag("possimus", "quia") {{
                                        key = "sint";
                                        value = "pariatur";
                                    }}),
                                    add(new Tag("facere", "veritatis") {{
                                        key = "eveniet";
                                        value = "asperiores";
                                    }}),
                                }};
                                timeSeriesSelector = new TimeSeriesSelector() {{
                                    timeSeriesIdentifiers = new TimeSeriesIdentifiers() {{
                                        dataSource = new DataSource(                new S3Config("consequuntur", "quasi") {{
                                                            kmsKeyArn = "similique";
                                                        }};);;
                                        format = "culpa";
                                        schema = new Schema() {{
                                            attributes = new org.openapis.openapi.models.shared.SchemaAttribute[]{{
                                                add(new SchemaAttribute() {{
                                                    attributeName = "tenetur";
                                                    attributeType = AttributeTypeEnum.STRING;
                                                }}),
                                                add(new SchemaAttribute() {{
                                                    attributeName = "earum";
                                                    attributeType = AttributeTypeEnum.FLOAT;
                                                }}),
                                            }};
                                        }};;
                                    }};;
                                }};;
                            }};, CreateWhatIfAnalysisXAmzTargetEnum.AMAZON_FORECAST_CREATE_WHAT_IF_ANALYSIS) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "eius";
                xAmzCredential = "libero";
                xAmzDate = "illum";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "aliquam";
            }};            

            CreateWhatIfAnalysisResponse res = sdk.sdk.createWhatIfAnalysis(req);

            if (res.createWhatIfAnalysisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWhatIfForecast

A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWhatIfForecastRequest;
import org.openapis.openapi.models.operations.CreateWhatIfForecastResponse;
import org.openapis.openapi.models.operations.CreateWhatIfForecastXAmzTargetEnum;
import org.openapis.openapi.models.shared.Action;
import org.openapis.openapi.models.shared.AttributeTypeEnum;
import org.openapis.openapi.models.shared.ConditionEnum;
import org.openapis.openapi.models.shared.CreateWhatIfForecastRequest;
import org.openapis.openapi.models.shared.OperationEnum;
import org.openapis.openapi.models.shared.S3Config;
import org.openapis.openapi.models.shared.Schema;
import org.openapis.openapi.models.shared.SchemaAttribute;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TimeSeriesCondition;
import org.openapis.openapi.models.shared.TimeSeriesReplacementsDataSource;
import org.openapis.openapi.models.shared.TimeSeriesTransformation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWhatIfForecastRequest req = new CreateWhatIfForecastRequest(                new CreateWhatIfForecastRequest("dicta", "ullam") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("aut", "voluptatum") {{
                                        key = "ullam";
                                        value = "nisi";
                                    }}),
                                    add(new Tag("ex", "deleniti") {{
                                        key = "qui";
                                        value = "quibusdam";
                                    }}),
                                }};
                                timeSeriesReplacementsDataSource = new TimeSeriesReplacementsDataSource(                new S3Config("itaque", "dolorum") {{
                                                    kmsKeyArn = "architecto";
                                                }};,                 new Schema() {{
                                                    attributes = new org.openapis.openapi.models.shared.SchemaAttribute[]{{
                                                        add(new SchemaAttribute() {{
                                                            attributeName = "tenetur";
                                                            attributeType = AttributeTypeEnum.STRING;
                                                        }}),
                                                        add(new SchemaAttribute() {{
                                                            attributeName = "at";
                                                            attributeType = AttributeTypeEnum.STRING;
                                                        }}),
                                                        add(new SchemaAttribute() {{
                                                            attributeName = "voluptate";
                                                            attributeType = AttributeTypeEnum.STRING;
                                                        }}),
                                                    }};
                                                }};) {{
                                    format = "minima";
                                    timestampFormat = "veritatis";
                                }};;
                                timeSeriesTransformations = new org.openapis.openapi.models.shared.TimeSeriesTransformation[]{{
                                    add(new TimeSeriesTransformation() {{
                                        action = new Action("accusantium", OperationEnum.MULTIPLY, 156.06) {{
                                            attributeName = "adipisci";
                                            operation = OperationEnum.MULTIPLY;
                                            value = 8395.13;
                                        }};
                                        timeSeriesConditions = new org.openapis.openapi.models.shared.TimeSeriesCondition[]{{
                                            add(new TimeSeriesCondition("corrupti", "non", ConditionEnum.EQUALS) {{
                                                attributeName = "eum";
                                                attributeValue = "mollitia";
                                                condition = ConditionEnum.EQUALS;
                                            }}),
                                            add(new TimeSeriesCondition("impedit", "explicabo", ConditionEnum.NOT_EQUALS) {{
                                                attributeName = "dolor";
                                                attributeValue = "occaecati";
                                                condition = ConditionEnum.NOT_EQUALS;
                                            }}),
                                            add(new TimeSeriesCondition("maiores", "natus", ConditionEnum.EQUALS) {{
                                                attributeName = "aut";
                                                attributeValue = "dignissimos";
                                                condition = ConditionEnum.EQUALS;
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};, CreateWhatIfForecastXAmzTargetEnum.AMAZON_FORECAST_CREATE_WHAT_IF_FORECAST) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "asperiores";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "consequuntur";
            }};            

            CreateWhatIfForecastResponse res = sdk.sdk.createWhatIfForecast(req);

            if (res.createWhatIfForecastResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWhatIfForecastExport

<p>Exports a forecast created by the <a>CreateWhatIfForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p> <code>≈&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your what-if forecast export jobs, use the <a>ListWhatIfForecastExports</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWhatIfForecastExportRequest;
import org.openapis.openapi.models.operations.CreateWhatIfForecastExportResponse;
import org.openapis.openapi.models.operations.CreateWhatIfForecastExportXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateWhatIfForecastExportRequest;
import org.openapis.openapi.models.shared.DataDestination;
import org.openapis.openapi.models.shared.S3Config;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWhatIfForecastExportRequest req = new CreateWhatIfForecastExportRequest(                new CreateWhatIfForecastExportRequest(                new DataDestination(                new S3Config("officia", "maxime") {{
                                                                kmsKeyArn = "dignissimos";
                                                            }};);,                 new String[]{{
                                                add("asperiores"),
                                                add("nemo"),
                                                add("quae"),
                                            }}, "quaerat") {{
                                format = "porro";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("adipisci", "fuga") {{
                                        key = "labore";
                                        value = "ab";
                                    }}),
                                    add(new Tag("velit", "culpa") {{
                                        key = "id";
                                        value = "suscipit";
                                    }}),
                                    add(new Tag("totam", "fugiat") {{
                                        key = "est";
                                        value = "recusandae";
                                    }}),
                                    add(new Tag("quos", "vel") {{
                                        key = "vel";
                                        value = "ducimus";
                                    }}),
                                }};
                            }};, CreateWhatIfForecastExportXAmzTargetEnum.AMAZON_FORECAST_CREATE_WHAT_IF_FORECAST_EXPORT) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "facilis";
                xAmzDate = "cum";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
            }};            

            CreateWhatIfForecastExportResponse res = sdk.sdk.createWhatIfForecastExport(req);

            if (res.createWhatIfForecastExportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataset

<p>Deletes an Amazon Forecast dataset that was created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. You can only delete datasets that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.</p> <note> <p>Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update the dataset group, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation, omitting the deleted dataset's ARN.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatasetRequest;
import org.openapis.openapi.models.operations.DeleteDatasetResponse;
import org.openapis.openapi.models.operations.DeleteDatasetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDatasetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatasetRequest req = new DeleteDatasetRequest(                new DeleteDatasetRequest("assumenda");, DeleteDatasetXAmzTargetEnum.AMAZON_FORECAST_DELETE_DATASET) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aliquid";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "cum";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "in";
            }};            

            DeleteDatasetResponse res = sdk.sdk.deleteDataset(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDatasetGroup

<p>Deletes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. You can only delete dataset groups that have a status of <code>ACTIVE</code>, <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> <p>This operation deletes only the dataset group, not the datasets in the group.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatasetGroupRequest;
import org.openapis.openapi.models.operations.DeleteDatasetGroupResponse;
import org.openapis.openapi.models.operations.DeleteDatasetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDatasetGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatasetGroupRequest req = new DeleteDatasetGroupRequest(                new DeleteDatasetGroupRequest("earum");, DeleteDatasetGroupXAmzTargetEnum.AMAZON_FORECAST_DELETE_DATASET_GROUP) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "doloribus";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "saepe";
            }};            

            DeleteDatasetGroupResponse res = sdk.sdk.deleteDatasetGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDatasetImportJob

Deletes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatasetImportJobRequest;
import org.openapis.openapi.models.operations.DeleteDatasetImportJobResponse;
import org.openapis.openapi.models.operations.DeleteDatasetImportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDatasetImportJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatasetImportJobRequest req = new DeleteDatasetImportJobRequest(                new DeleteDatasetImportJobRequest("dolore");, DeleteDatasetImportJobXAmzTargetEnum.AMAZON_FORECAST_DELETE_DATASET_IMPORT_JOB) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "adipisci";
                xAmzDate = "non";
                xAmzSecurityToken = "amet";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "dignissimos";
            }};            

            DeleteDatasetImportJobResponse res = sdk.sdk.deleteDatasetImportJob(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteExplainability

<p>Deletes an Explainability resource.</p> <p>You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeExplainability</a> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteExplainabilityRequest;
import org.openapis.openapi.models.operations.DeleteExplainabilityResponse;
import org.openapis.openapi.models.operations.DeleteExplainabilityXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteExplainabilityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteExplainabilityRequest req = new DeleteExplainabilityRequest(                new DeleteExplainabilityRequest("debitis");, DeleteExplainabilityXAmzTargetEnum.AMAZON_FORECAST_DELETE_EXPLAINABILITY) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "harum";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "libero";
            }};            

            DeleteExplainabilityResponse res = sdk.sdk.deleteExplainability(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteExplainabilityExport

Deletes an Explainability export.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteExplainabilityExportRequest;
import org.openapis.openapi.models.operations.DeleteExplainabilityExportResponse;
import org.openapis.openapi.models.operations.DeleteExplainabilityExportXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteExplainabilityExportRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteExplainabilityExportRequest req = new DeleteExplainabilityExportRequest(                new DeleteExplainabilityExportRequest("accusamus");, DeleteExplainabilityExportXAmzTargetEnum.AMAZON_FORECAST_DELETE_EXPLAINABILITY_EXPORT) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "aspernatur";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "minima";
            }};            

            DeleteExplainabilityExportResponse res = sdk.sdk.deleteExplainabilityExport(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteForecast

<p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecast</a> operation.</p> <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you can no longer query the forecast.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteForecastRequest;
import org.openapis.openapi.models.operations.DeleteForecastResponse;
import org.openapis.openapi.models.operations.DeleteForecastXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteForecastRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteForecastRequest req = new DeleteForecastRequest(                new DeleteForecastRequest("dolorum");, DeleteForecastXAmzTargetEnum.AMAZON_FORECAST_DELETE_FORECAST) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "minus";
                xAmzCredential = "dolores";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "in";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "aliquam";
            }};            

            DeleteForecastResponse res = sdk.sdk.deleteForecast(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteForecastExportJob

Deletes a forecast export job created using the <a>CreateForecastExportJob</a> operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteForecastExportJobRequest;
import org.openapis.openapi.models.operations.DeleteForecastExportJobResponse;
import org.openapis.openapi.models.operations.DeleteForecastExportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteForecastExportJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteForecastExportJobRequest req = new DeleteForecastExportJobRequest(                new DeleteForecastExportJobRequest("temporibus");, DeleteForecastExportJobXAmzTargetEnum.AMAZON_FORECAST_DELETE_FORECAST_EXPORT_JOB) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "cum";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "quas";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "nesciunt";
            }};            

            DeleteForecastExportJobResponse res = sdk.sdk.deleteForecastExportJob(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMonitor

Deletes a monitor resource. You can only delete a monitor resource with a status of <code>ACTIVE</code>, <code>ACTIVE_STOPPED</code>, <code>CREATE_FAILED</code>, or <code>CREATE_STOPPED</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMonitorRequest;
import org.openapis.openapi.models.operations.DeleteMonitorResponse;
import org.openapis.openapi.models.operations.DeleteMonitorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteMonitorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMonitorRequest req = new DeleteMonitorRequest(                new DeleteMonitorRequest("corrupti");, DeleteMonitorXAmzTargetEnum.AMAZON_FORECAST_DELETE_MONITOR) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "totam";
                xAmzCredential = "hic";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "rerum";
            }};            

            DeleteMonitorResponse res = sdk.sdk.deleteMonitor(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePredictor

Deletes a predictor created using the <a>DescribePredictor</a> or <a>CreatePredictor</a> operations. You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribePredictor</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePredictorRequest;
import org.openapis.openapi.models.operations.DeletePredictorResponse;
import org.openapis.openapi.models.operations.DeletePredictorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePredictorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePredictorRequest req = new DeletePredictorRequest(                new DeletePredictorRequest("reiciendis");, DeletePredictorXAmzTargetEnum.AMAZON_FORECAST_DELETE_PREDICTOR) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "facilis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "iste";
            }};            

            DeletePredictorResponse res = sdk.sdk.deletePredictor(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePredictorBacktestExportJob

Deletes a predictor backtest export job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePredictorBacktestExportJobRequest;
import org.openapis.openapi.models.operations.DeletePredictorBacktestExportJobResponse;
import org.openapis.openapi.models.operations.DeletePredictorBacktestExportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePredictorBacktestExportJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePredictorBacktestExportJobRequest req = new DeletePredictorBacktestExportJobRequest(                new DeletePredictorBacktestExportJobRequest("laborum");, DeletePredictorBacktestExportJobXAmzTargetEnum.AMAZON_FORECAST_DELETE_PREDICTOR_BACKTEST_EXPORT_JOB) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "in";
                xAmzCredential = "commodi";
                xAmzDate = "quidem";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "unde";
            }};            

            DeletePredictorBacktestExportJobResponse res = sdk.sdk.deletePredictorBacktestExportJob(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourceTree

<p>Deletes an entire resource tree. This operation will delete the parent resource and its child resources.</p> <p>Child resources are resources that were created from another resource. For example, when a forecast is generated from a predictor, the forecast is the child resource and the predictor is the parent resource.</p> <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p> <ul> <li> <p> <b>Dataset</b>: dataset import jobs</p> </li> <li> <p> <b>Dataset Group</b>: predictors, predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Predictor</b>: predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Forecast</b>: forecast export jobs</p> </li> </ul> <note> <p> <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not delete datasets or exported files stored in Amazon S3. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourceTreeRequest;
import org.openapis.openapi.models.operations.DeleteResourceTreeResponse;
import org.openapis.openapi.models.operations.DeleteResourceTreeXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourceTreeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourceTreeRequest req = new DeleteResourceTreeRequest(                new DeleteResourceTreeRequest("suscipit");, DeleteResourceTreeXAmzTargetEnum.AMAZON_FORECAST_DELETE_RESOURCE_TREE) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "illo";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "maiores";
            }};            

            DeleteResourceTreeResponse res = sdk.sdk.deleteResourceTree(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWhatIfAnalysis

<p>Deletes a what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation. You can delete only what-if analyses that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfAnalysis</a> operation. </p> <p>You can't delete a what-if analysis while any of its forecasts are being exported.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWhatIfAnalysisRequest;
import org.openapis.openapi.models.operations.DeleteWhatIfAnalysisResponse;
import org.openapis.openapi.models.operations.DeleteWhatIfAnalysisXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteWhatIfAnalysisRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWhatIfAnalysisRequest req = new DeleteWhatIfAnalysisRequest(                new DeleteWhatIfAnalysisRequest("sed");, DeleteWhatIfAnalysisXAmzTargetEnum.AMAZON_FORECAST_DELETE_WHAT_IF_ANALYSIS) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "eius";
                xAmzCredential = "necessitatibus";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "ea";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "quos";
            }};            

            DeleteWhatIfAnalysisResponse res = sdk.sdk.deleteWhatIfAnalysis(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWhatIfForecast

<p>Deletes a what-if forecast created using the <a>CreateWhatIfForecast</a> operation. You can delete only what-if forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecast</a> operation. </p> <p>You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWhatIfForecastRequest;
import org.openapis.openapi.models.operations.DeleteWhatIfForecastResponse;
import org.openapis.openapi.models.operations.DeleteWhatIfForecastXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteWhatIfForecastRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWhatIfForecastRequest req = new DeleteWhatIfForecastRequest(                new DeleteWhatIfForecastRequest("tempora");, DeleteWhatIfForecastXAmzTargetEnum.AMAZON_FORECAST_DELETE_WHAT_IF_FORECAST) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "reiciendis";
                xAmzDate = "ex";
                xAmzSecurityToken = "sit";
                xAmzSignature = "non";
                xAmzSignedHeaders = "officiis";
            }};            

            DeleteWhatIfForecastResponse res = sdk.sdk.deleteWhatIfForecast(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWhatIfForecastExport

Deletes a what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation. You can delete only what-if forecast exports that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWhatIfForecastExportRequest;
import org.openapis.openapi.models.operations.DeleteWhatIfForecastExportResponse;
import org.openapis.openapi.models.operations.DeleteWhatIfForecastExportXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteWhatIfForecastExportRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWhatIfForecastExportRequest req = new DeleteWhatIfForecastExportRequest(                new DeleteWhatIfForecastExportRequest("facilis");, DeleteWhatIfForecastExportXAmzTargetEnum.AMAZON_FORECAST_DELETE_WHAT_IF_FORECAST_EXPORT) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "ipsam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "rem";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "nobis";
            }};            

            DeleteWhatIfForecastExportResponse res = sdk.sdk.deleteWhatIfForecastExport(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAutoPredictor

Describes a predictor created using the CreateAutoPredictor operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAutoPredictorRequest;
import org.openapis.openapi.models.operations.DescribeAutoPredictorResponse;
import org.openapis.openapi.models.operations.DescribeAutoPredictorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAutoPredictorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAutoPredictorRequest req = new DescribeAutoPredictorRequest(                new DescribeAutoPredictorRequest("veniam");, DescribeAutoPredictorXAmzTargetEnum.AMAZON_FORECAST_DESCRIBE_AUTO_PREDICTOR) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "reiciendis";
                xAmzDate = "nulla";
                xAmzSecurityToken = "magni";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "saepe";
            }};            

            DescribeAutoPredictorResponse res = sdk.sdk.describeAutoPredictor(req);

            if (res.describeAutoPredictorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDataset

<p>Describes an Amazon Forecast dataset created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation.</p> <p>In addition to listing the parameters specified in the <code>CreateDataset</code> request, this operation includes the following dataset properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDatasetRequest;
import org.openapis.openapi.models.operations.DescribeDatasetResponse;
import org.openapis.openapi.models.operations.DescribeDatasetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDatasetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDatasetRequest req = new DescribeDatasetRequest(                new DescribeDatasetRequest("veniam");, DescribeDatasetXAmzTargetEnum.AMAZON_FORECAST_DESCRIBE_DATASET) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "beatae";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "cum";
            }};            

            DescribeDatasetResponse res = sdk.sdk.describeDataset(req);

            if (res.describeDatasetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDatasetGroup

<p>Describes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>DatasetArns</code> - The datasets belonging to the group.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDatasetGroupRequest;
import org.openapis.openapi.models.operations.DescribeDatasetGroupResponse;
import org.openapis.openapi.models.operations.DescribeDatasetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDatasetGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDatasetGroupRequest req = new DescribeDatasetGroupRequest(                new DescribeDatasetGroupRequest("dolorum");, DescribeDatasetGroupXAmzTargetEnum.AMAZON_FORECAST_DESCRIBE_DATASET_GROUP) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "error";
                xAmzCredential = "hic";
                xAmzDate = "expedita";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "dolorum";
            }};            

            DescribeDatasetGroupResponse res = sdk.sdk.describeDatasetGroup(req);

            if (res.describeDatasetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDatasetImportJob

<p>Describes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetImportJob</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>DataSize</code> </p> </li> <li> <p> <code>FieldStatistics</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDatasetImportJobRequest;
import org.openapis.openapi.models.operations.DescribeDatasetImportJobResponse;
import org.openapis.openapi.models.operations.DescribeDatasetImportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDatasetImportJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDatasetImportJobRequest req = new DescribeDatasetImportJobRequest(                new DescribeDatasetImportJobRequest("officia");, DescribeDatasetImportJobXAmzTargetEnum.AMAZON_FORECAST_DESCRIBE_DATASET_IMPORT_JOB) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "accusamus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "atque";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "ut";
            }};            

            DescribeDatasetImportJobResponse res = sdk.sdk.describeDatasetImportJob(req);

            if (res.describeDatasetImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeExplainability

Describes an Explainability resource created using the <a>CreateExplainability</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeExplainabilityRequest;
import org.openapis.openapi.models.operations.DescribeExplainabilityResponse;
import org.openapis.openapi.models.operations.DescribeExplainabilityXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeExplainabilityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeExplainabilityRequest req = new DescribeExplainabilityRequest(                new DescribeExplainabilityRequest("voluptatem");, DescribeExplainabilityXAmzTargetEnum.AMAZON_FORECAST_DESCRIBE_EXPLAINABILITY) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "magnam";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "sit";
            }};            

            DescribeExplainabilityResponse res = sdk.sdk.describeExplainability(req);

            if (res.describeExplainabilityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeExplainabilityExport

Describes an Explainability export created using the <a>CreateExplainabilityExport</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeExplainabilityExportRequest;
import org.openapis.openapi.models.operations.DescribeExplainabilityExportResponse;
import org.openapis.openapi.models.operations.DescribeExplainabilityExportXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeExplainabilityExportRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeExplainabilityExportRequest req = new DescribeExplainabilityExportRequest(                new DescribeExplainabilityExportRequest("quas");, DescribeExplainabilityExportXAmzTargetEnum.AMAZON_FORECAST_DESCRIBE_EXPLAINABILITY_EXPORT) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "et";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "ex";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "sit";
            }};            

            DescribeExplainabilityExportResponse res = sdk.sdk.describeExplainabilityExport(req);

            if (res.describeExplainabilityExportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeForecast

<p>Describes a forecast created using the <a>CreateForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetGroupArn</code> - The dataset group that provided the training data.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeForecastRequest;
import org.openapis.openapi.models.operations.DescribeForecastResponse;
import org.openapis.openapi.models.operations.DescribeForecastXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeForecastRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeForecastRequest req = new DescribeForecastRequest(                new DescribeForecastRequest("nostrum");, DescribeForecastXAmzTargetEnum.AMAZON_FORECAST_DESCRIBE_FORECAST) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "error";
                xAmzCredential = "consequatur";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "harum";
            }};            

            DescribeForecastResponse res = sdk.sdk.describeForecast(req);

            if (res.describeForecastResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeForecastExportJob

<p>Describes a forecast export job created using the <a>CreateForecastExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreateForecastExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeForecastExportJobRequest;
import org.openapis.openapi.models.operations.DescribeForecastExportJobResponse;
import org.openapis.openapi.models.operations.DescribeForecastExportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeForecastExportJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeForecastExportJobRequest req = new DescribeForecastExportJobRequest(                new DescribeForecastExportJobRequest("architecto");, DescribeForecastExportJobXAmzTargetEnum.AMAZON_FORECAST_DESCRIBE_FORECAST_EXPORT_JOB) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "labore";
                xAmzCredential = "quidem";
                xAmzDate = "atque";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "tenetur";
            }};            

            DescribeForecastExportJobResponse res = sdk.sdk.describeForecastExportJob(req);

            if (res.describeForecastExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMonitor

<p>Describes a monitor resource. In addition to listing the properties provided in the <a>CreateMonitor</a> request, this operation lists the following properties:</p> <ul> <li> <p> <code>Baseline</code> </p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastEvaluationTime</code> </p> </li> <li> <p> <code>LastEvaluationState</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMonitorRequest;
import org.openapis.openapi.models.operations.DescribeMonitorResponse;
import org.openapis.openapi.models.operations.DescribeMonitorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMonitorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMonitorRequest req = new DescribeMonitorRequest(                new DescribeMonitorRequest("alias");, DescribeMonitorXAmzTargetEnum.AMAZON_FORECAST_DESCRIBE_MONITOR) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "voluptate";
                xAmzDate = "unde";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "repellendus";
            }};            

            DescribeMonitorResponse res = sdk.sdk.describeMonitor(req);

            if (res.describeMonitorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePredictor

<note> <p> This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a legacy predictor, use <a>DescribeAutoPredictor</a>.</p> </note> <p>Describes a predictor created using the <a>CreatePredictor</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreatePredictor</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetImportJobArns</code> - The dataset import jobs used to import training data.</p> </li> <li> <p> <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were evaluated.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePredictorRequest;
import org.openapis.openapi.models.operations.DescribePredictorResponse;
import org.openapis.openapi.models.operations.DescribePredictorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePredictorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePredictorRequest req = new DescribePredictorRequest(                new DescribePredictorRequest("voluptates");, DescribePredictorXAmzTargetEnum.AMAZON_FORECAST_DESCRIBE_PREDICTOR) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "est";
                xAmzCredential = "quidem";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "facere";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "praesentium";
            }};            

            DescribePredictorResponse res = sdk.sdk.describePredictor(req);

            if (res.describePredictorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePredictorBacktestExportJob

<p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreatePredictorBacktestExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> (if an error occurred)</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePredictorBacktestExportJobRequest;
import org.openapis.openapi.models.operations.DescribePredictorBacktestExportJobResponse;
import org.openapis.openapi.models.operations.DescribePredictorBacktestExportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePredictorBacktestExportJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePredictorBacktestExportJobRequest req = new DescribePredictorBacktestExportJobRequest(                new DescribePredictorBacktestExportJobRequest("veniam");, DescribePredictorBacktestExportJobXAmzTargetEnum.AMAZON_FORECAST_DESCRIBE_PREDICTOR_BACKTEST_EXPORT_JOB) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "repudiandae";
                xAmzDate = "quasi";
                xAmzSecurityToken = "atque";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "asperiores";
            }};            

            DescribePredictorBacktestExportJobResponse res = sdk.sdk.describePredictorBacktestExportJob(req);

            if (res.describePredictorBacktestExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWhatIfAnalysis

<p>Describes the what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfAnalysis</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWhatIfAnalysisRequest;
import org.openapis.openapi.models.operations.DescribeWhatIfAnalysisResponse;
import org.openapis.openapi.models.operations.DescribeWhatIfAnalysisXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeWhatIfAnalysisRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWhatIfAnalysisRequest req = new DescribeWhatIfAnalysisRequest(                new DescribeWhatIfAnalysisRequest("suscipit");, DescribeWhatIfAnalysisXAmzTargetEnum.AMAZON_FORECAST_DESCRIBE_WHAT_IF_ANALYSIS) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "et";
                xAmzDate = "esse";
                xAmzSecurityToken = "amet";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "ea";
            }};            

            DescribeWhatIfAnalysisResponse res = sdk.sdk.describeWhatIfAnalysis(req);

            if (res.describeWhatIfAnalysisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWhatIfForecast

<p>Describes the what-if forecast created using the <a>CreateWhatIfForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWhatIfForecastRequest;
import org.openapis.openapi.models.operations.DescribeWhatIfForecastResponse;
import org.openapis.openapi.models.operations.DescribeWhatIfForecastXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeWhatIfForecastRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWhatIfForecastRequest req = new DescribeWhatIfForecastRequest(                new DescribeWhatIfForecastRequest("error");, DescribeWhatIfForecastXAmzTargetEnum.AMAZON_FORECAST_DESCRIBE_WHAT_IF_FORECAST) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "accusamus";
                xAmzDate = "natus";
                xAmzSecurityToken = "minima";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "ex";
            }};            

            DescribeWhatIfForecastResponse res = sdk.sdk.describeWhatIfForecast(req);

            if (res.describeWhatIfForecastResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWhatIfForecastExport

<p>Describes the what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecastExport</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWhatIfForecastExportRequest;
import org.openapis.openapi.models.operations.DescribeWhatIfForecastExportResponse;
import org.openapis.openapi.models.operations.DescribeWhatIfForecastExportXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeWhatIfForecastExportRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWhatIfForecastExportRequest req = new DescribeWhatIfForecastExportRequest(                new DescribeWhatIfForecastExportRequest("corrupti");, DescribeWhatIfForecastExportXAmzTargetEnum.AMAZON_FORECAST_DESCRIBE_WHAT_IF_FORECAST_EXPORT) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "error";
                xAmzCredential = "blanditiis";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "atque";
            }};            

            DescribeWhatIfForecastExportResponse res = sdk.sdk.describeWhatIfForecastExport(req);

            if (res.describeWhatIfForecastExportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccuracyMetrics

<p>Provides metrics on the accuracy of the models that were trained by the <a>CreatePredictor</a> operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Predictor Metrics</a>.</p> <p>This operation generates metrics for each backtest window that was evaluated. The number of backtest windows (<code>NumberOfBacktestWindows</code>) is specified using the <a>EvaluationParameters</a> object, which is optionally included in the <code>CreatePredictor</code> request. If <code>NumberOfBacktestWindows</code> isn't specified, the number defaults to one.</p> <p>The parameters of the <code>filling</code> method determine which items contribute to the metrics. If you want all items to contribute, specify <code>zero</code>. If you want only those items that have complete data in the range being evaluated to contribute, specify <code>nan</code>. For more information, see <a>FeaturizationMethod</a>.</p> <note> <p>Before you can get accuracy metrics, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccuracyMetricsRequest;
import org.openapis.openapi.models.operations.GetAccuracyMetricsResponse;
import org.openapis.openapi.models.operations.GetAccuracyMetricsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAccuracyMetricsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccuracyMetricsRequest req = new GetAccuracyMetricsRequest(                new GetAccuracyMetricsRequest("recusandae");, GetAccuracyMetricsXAmzTargetEnum.AMAZON_FORECAST_GET_ACCURACY_METRICS) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "labore";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "dicta";
            }};            

            GetAccuracyMetricsResponse res = sdk.sdk.getAccuracyMetrics(req);

            if (res.getAccuracyMetricsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatasetGroups

Returns a list of dataset groups created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. For each dataset group, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasetGroupsRequest;
import org.openapis.openapi.models.operations.ListDatasetGroupsResponse;
import org.openapis.openapi.models.operations.ListDatasetGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDatasetGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatasetGroupsRequest req = new ListDatasetGroupsRequest(                new ListDatasetGroupsRequest() {{
                                maxResults = 106429L;
                                nextToken = "dolores";
                            }};, ListDatasetGroupsXAmzTargetEnum.AMAZON_FORECAST_LIST_DATASET_GROUPS) {{
                maxResults = "enim";
                nextToken = "laboriosam";
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "a";
                xAmzCredential = "molestias";
                xAmzDate = "magnam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "occaecati";
            }};            

            ListDatasetGroupsResponse res = sdk.sdk.listDatasetGroups(req);

            if (res.listDatasetGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatasetImportJobs

Returns a list of dataset import jobs created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation. You can filter the list by providing an array of <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Filter.html">Filter</a> objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasetImportJobsRequest;
import org.openapis.openapi.models.operations.ListDatasetImportJobsResponse;
import org.openapis.openapi.models.operations.ListDatasetImportJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterConditionStringEnum;
import org.openapis.openapi.models.shared.ListDatasetImportJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatasetImportJobsRequest req = new ListDatasetImportJobsRequest(                new ListDatasetImportJobsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "consequuntur", "fugit") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "adipisci";
                                        value = "eveniet";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "illo", "corporis") {{
                                        condition = FilterConditionStringEnum.IS_NOT;
                                        key = "quis";
                                        value = "reprehenderit";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "doloremque", "iure") {{
                                        condition = FilterConditionStringEnum.IS_NOT;
                                        key = "eveniet";
                                        value = "non";
                                    }}),
                                }};
                                maxResults = 59944L;
                                nextToken = "totam";
                            }};, ListDatasetImportJobsXAmzTargetEnum.AMAZON_FORECAST_LIST_DATASET_IMPORT_JOBS) {{
                maxResults = "quae";
                nextToken = "molestiae";
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "qui";
                xAmzCredential = "cum";
                xAmzDate = "iure";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "ratione";
                xAmzSignedHeaders = "laborum";
            }};            

            ListDatasetImportJobsResponse res = sdk.sdk.listDatasetImportJobs(req);

            if (res.listDatasetImportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatasets

Returns a list of datasets created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties, use the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasetsRequest;
import org.openapis.openapi.models.operations.ListDatasetsResponse;
import org.openapis.openapi.models.operations.ListDatasetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDatasetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatasetsRequest req = new ListDatasetsRequest(                new ListDatasetsRequest() {{
                                maxResults = 528940L;
                                nextToken = "rem";
                            }};, ListDatasetsXAmzTargetEnum.AMAZON_FORECAST_LIST_DATASETS) {{
                maxResults = "aliquam";
                nextToken = "ad";
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "alias";
                xAmzCredential = "corporis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "voluptas";
            }};            

            ListDatasetsResponse res = sdk.sdk.listDatasets(req);

            if (res.listDatasetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExplainabilities

<p>Returns a list of Explainability resources created using the <a>CreateExplainability</a> operation. This operation returns a summary for each Explainability. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability resource, use the ARN with the <a>DescribeExplainability</a> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExplainabilitiesRequest;
import org.openapis.openapi.models.operations.ListExplainabilitiesResponse;
import org.openapis.openapi.models.operations.ListExplainabilitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterConditionStringEnum;
import org.openapis.openapi.models.shared.ListExplainabilitiesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExplainabilitiesRequest req = new ListExplainabilitiesRequest(                new ListExplainabilitiesRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter(FilterConditionStringEnum.IS, "dolore", "dolorum") {{
                                        condition = FilterConditionStringEnum.IS_NOT;
                                        key = "dolores";
                                        value = "id";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "quaerat", "molestiae") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "quae";
                                        value = "recusandae";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS, "debitis", "laudantium") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "ut";
                                        value = "culpa";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS, "provident", "quis") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "nemo";
                                        value = "recusandae";
                                    }}),
                                }};
                                maxResults = 431785L;
                                nextToken = "reiciendis";
                            }};, ListExplainabilitiesXAmzTargetEnum.AMAZON_FORECAST_LIST_EXPLAINABILITIES) {{
                maxResults = "provident";
                nextToken = "aspernatur";
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "animi";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "possimus";
            }};            

            ListExplainabilitiesResponse res = sdk.sdk.listExplainabilities(req);

            if (res.listExplainabilitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExplainabilityExports

<p>Returns a list of Explainability exports created using the <a>CreateExplainabilityExport</a> operation. This operation returns a summary for each Explainability export. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability export, use the ARN with the <a>DescribeExplainability</a> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExplainabilityExportsRequest;
import org.openapis.openapi.models.operations.ListExplainabilityExportsResponse;
import org.openapis.openapi.models.operations.ListExplainabilityExportsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterConditionStringEnum;
import org.openapis.openapi.models.shared.ListExplainabilityExportsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExplainabilityExportsRequest req = new ListExplainabilityExportsRequest(                new ListExplainabilityExportsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "ullam", "in") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "accusantium";
                                        value = "repellat";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "placeat", "modi") {{
                                        condition = FilterConditionStringEnum.IS_NOT;
                                        key = "earum";
                                        value = "officia";
                                    }}),
                                }};
                                maxResults = 976226L;
                                nextToken = "molestias";
                            }};, ListExplainabilityExportsXAmzTargetEnum.AMAZON_FORECAST_LIST_EXPLAINABILITY_EXPORTS) {{
                maxResults = "officiis";
                nextToken = "sapiente";
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "rerum";
                xAmzDate = "tempora";
                xAmzSecurityToken = "quis";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "fugit";
            }};            

            ListExplainabilityExportsResponse res = sdk.sdk.listExplainabilityExports(req);

            if (res.listExplainabilityExportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listForecastExportJobs

Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a> operation. You can filter the list using an array of <a>Filter</a> objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListForecastExportJobsRequest;
import org.openapis.openapi.models.operations.ListForecastExportJobsResponse;
import org.openapis.openapi.models.operations.ListForecastExportJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterConditionStringEnum;
import org.openapis.openapi.models.shared.ListForecastExportJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListForecastExportJobsRequest req = new ListForecastExportJobsRequest(                new ListForecastExportJobsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter(FilterConditionStringEnum.IS, "eius", "rem") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "velit";
                                        value = "aspernatur";
                                    }}),
                                }};
                                maxResults = 871083L;
                                nextToken = "impedit";
                            }};, ListForecastExportJobsXAmzTargetEnum.AMAZON_FORECAST_LIST_FORECAST_EXPORT_JOBS) {{
                maxResults = "eos";
                nextToken = "sapiente";
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "minima";
                xAmzDate = "beatae";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "earum";
            }};            

            ListForecastExportJobsResponse res = sdk.sdk.listForecastExportJobs(req);

            if (res.listForecastExportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listForecasts

Returns a list of forecasts created using the <a>CreateForecast</a> operation. For each forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the <a>DescribeForecast</a> operation. You can filter the list using an array of <a>Filter</a> objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListForecastsRequest;
import org.openapis.openapi.models.operations.ListForecastsResponse;
import org.openapis.openapi.models.operations.ListForecastsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterConditionStringEnum;
import org.openapis.openapi.models.shared.ListForecastsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListForecastsRequest req = new ListForecastsRequest(                new ListForecastsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "maiores", "debitis") {{
                                        condition = FilterConditionStringEnum.IS_NOT;
                                        key = "eaque";
                                        value = "earum";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS, "fugit", "cumque") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "porro";
                                        value = "suscipit";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "nulla", "consequatur") {{
                                        condition = FilterConditionStringEnum.IS_NOT;
                                        key = "ratione";
                                        value = "animi";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "occaecati", "suscipit") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "et";
                                        value = "ducimus";
                                    }}),
                                }};
                                maxResults = 241557L;
                                nextToken = "quasi";
                            }};, ListForecastsXAmzTargetEnum.AMAZON_FORECAST_LIST_FORECASTS) {{
                maxResults = "magni";
                nextToken = "doloribus";
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "ipsa";
                xAmzDate = "tempora";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "dicta";
            }};            

            ListForecastsResponse res = sdk.sdk.listForecasts(req);

            if (res.listForecastsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMonitorEvaluations

<p>Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource during different windows of time.</p> <p>For information about monitoring see <a>predictor-monitoring</a>. For more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMonitorEvaluationsRequest;
import org.openapis.openapi.models.operations.ListMonitorEvaluationsResponse;
import org.openapis.openapi.models.operations.ListMonitorEvaluationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterConditionStringEnum;
import org.openapis.openapi.models.shared.ListMonitorEvaluationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMonitorEvaluationsRequest req = new ListMonitorEvaluationsRequest(                new ListMonitorEvaluationsRequest("esse") {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter(FilterConditionStringEnum.IS, "fugiat", "doloremque") {{
                                        condition = FilterConditionStringEnum.IS_NOT;
                                        key = "reiciendis";
                                        value = "vel";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS, "ex", "consectetur") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "odio";
                                        value = "tempora";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS, "nostrum", "fugiat") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "ipsa";
                                        value = "laborum";
                                    }}),
                                }};
                                maxResults = 713767L;
                                nextToken = "aliquid";
                            }};, ListMonitorEvaluationsXAmzTargetEnum.AMAZON_FORECAST_LIST_MONITOR_EVALUATIONS) {{
                maxResults = "officia";
                nextToken = "suscipit";
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "eum";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "iste";
                xAmzSignature = "id";
                xAmzSignedHeaders = "ab";
            }};            

            ListMonitorEvaluationsResponse res = sdk.sdk.listMonitorEvaluations(req);

            if (res.listMonitorEvaluationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMonitors

Returns a list of monitors created with the <a>CreateMonitor</a> operation and <a>CreateAutoPredictor</a> operation. For each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the <a>DescribeMonitor</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMonitorsRequest;
import org.openapis.openapi.models.operations.ListMonitorsResponse;
import org.openapis.openapi.models.operations.ListMonitorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterConditionStringEnum;
import org.openapis.openapi.models.shared.ListMonitorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMonitorsRequest req = new ListMonitorsRequest(                new ListMonitorsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "ad", "deleniti") {{
                                        condition = FilterConditionStringEnum.IS_NOT;
                                        key = "mollitia";
                                        value = "laborum";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS, "quo", "ex") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "vitae";
                                        value = "repellendus";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS, "molestias", "cum") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "ad";
                                        value = "expedita";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "veritatis", "rerum") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "beatae";
                                        value = "voluptatum";
                                    }}),
                                }};
                                maxResults = 665678L;
                                nextToken = "culpa";
                            }};, ListMonitorsXAmzTargetEnum.AMAZON_FORECAST_LIST_MONITORS) {{
                maxResults = "voluptatem";
                nextToken = "sapiente";
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "fuga";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "alias";
            }};            

            ListMonitorsResponse res = sdk.sdk.listMonitors(req);

            if (res.listMonitorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPredictorBacktestExportJobs

<p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a summary for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular backtest export job, use the ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPredictorBacktestExportJobsRequest;
import org.openapis.openapi.models.operations.ListPredictorBacktestExportJobsResponse;
import org.openapis.openapi.models.operations.ListPredictorBacktestExportJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterConditionStringEnum;
import org.openapis.openapi.models.shared.ListPredictorBacktestExportJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPredictorBacktestExportJobsRequest req = new ListPredictorBacktestExportJobsRequest(                new ListPredictorBacktestExportJobsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "nemo", "asperiores") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "sapiente";
                                        value = "rem";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "totam", "impedit") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "ullam";
                                        value = "perferendis";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "dolor", "aliquam") {{
                                        condition = FilterConditionStringEnum.IS_NOT;
                                        key = "nam";
                                        value = "ipsam";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS, "dolor", "consequatur") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "deleniti";
                                        value = "veritatis";
                                    }}),
                                }};
                                maxResults = 100014L;
                                nextToken = "sit";
                            }};, ListPredictorBacktestExportJobsXAmzTargetEnum.AMAZON_FORECAST_LIST_PREDICTOR_BACKTEST_EXPORT_JOBS) {{
                maxResults = "modi";
                nextToken = "fugit";
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "quae";
                xAmzDate = "dolor";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "consequuntur";
            }};            

            ListPredictorBacktestExportJobsResponse res = sdk.sdk.listPredictorBacktestExportJobs(req);

            if (res.listPredictorBacktestExportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPredictors

<p>Returns a list of predictors created using the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). </p> <p>You can retrieve the complete set of properties by using the ARN with the <a>DescribeAutoPredictor</a> and <a>DescribePredictor</a> operations. You can filter the list using an array of <a>Filter</a> objects.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPredictorsRequest;
import org.openapis.openapi.models.operations.ListPredictorsResponse;
import org.openapis.openapi.models.operations.ListPredictorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterConditionStringEnum;
import org.openapis.openapi.models.shared.ListPredictorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPredictorsRequest req = new ListPredictorsRequest(                new ListPredictorsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter(FilterConditionStringEnum.IS, "necessitatibus", "sed") {{
                                        condition = FilterConditionStringEnum.IS_NOT;
                                        key = "impedit";
                                        value = "officiis";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS, "vel", "voluptatum") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "nesciunt";
                                        value = "expedita";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "autem", "nobis") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "exercitationem";
                                        value = "ab";
                                    }}),
                                }};
                                maxResults = 388319L;
                                nextToken = "recusandae";
                            }};, ListPredictorsXAmzTargetEnum.AMAZON_FORECAST_LIST_PREDICTORS) {{
                maxResults = "consequuntur";
                nextToken = "voluptatem";
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "quasi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "at";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "est";
            }};            

            ListPredictorsResponse res = sdk.sdk.listPredictors(req);

            if (res.listPredictorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags for an Amazon Forecast resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("sequi");, ListTagsForResourceXAmzTargetEnum.AMAZON_FORECAST_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "optio";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "blanditiis";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWhatIfAnalyses

Returns a list of what-if analyses created using the <a>CreateWhatIfAnalysis</a> operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the <a>DescribeWhatIfAnalysis</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWhatIfAnalysesRequest;
import org.openapis.openapi.models.operations.ListWhatIfAnalysesResponse;
import org.openapis.openapi.models.operations.ListWhatIfAnalysesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterConditionStringEnum;
import org.openapis.openapi.models.shared.ListWhatIfAnalysesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWhatIfAnalysesRequest req = new ListWhatIfAnalysesRequest(                new ListWhatIfAnalysesRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter(FilterConditionStringEnum.IS, "aspernatur", "ducimus") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "nemo";
                                        value = "quos";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS, "quasi", "rem") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "fuga";
                                        value = "laudantium";
                                    }}),
                                }};
                                maxResults = 851854L;
                                nextToken = "dicta";
                            }};, ListWhatIfAnalysesXAmzTargetEnum.AMAZON_FORECAST_LIST_WHAT_IF_ANALYSES) {{
                maxResults = "nisi";
                nextToken = "consequuntur";
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "cupiditate";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "omnis";
            }};            

            ListWhatIfAnalysesResponse res = sdk.sdk.listWhatIfAnalyses(req);

            if (res.listWhatIfAnalysesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWhatIfForecastExports

Returns a list of what-if forecast exports created using the <a>CreateWhatIfForecastExport</a> operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the <a>DescribeWhatIfForecastExport</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWhatIfForecastExportsRequest;
import org.openapis.openapi.models.operations.ListWhatIfForecastExportsResponse;
import org.openapis.openapi.models.operations.ListWhatIfForecastExportsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterConditionStringEnum;
import org.openapis.openapi.models.shared.ListWhatIfForecastExportsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWhatIfForecastExportsRequest req = new ListWhatIfForecastExportsRequest(                new ListWhatIfForecastExportsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "accusamus", "voluptatibus") {{
                                        condition = FilterConditionStringEnum.IS_NOT;
                                        key = "magni";
                                        value = "inventore";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS, "praesentium", "maxime") {{
                                        condition = FilterConditionStringEnum.IS_NOT;
                                        key = "omnis";
                                        value = "delectus";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS, "itaque", "commodi") {{
                                        condition = FilterConditionStringEnum.IS;
                                        key = "temporibus";
                                        value = "quos";
                                    }}),
                                }};
                                maxResults = 520761L;
                                nextToken = "earum";
                            }};, ListWhatIfForecastExportsXAmzTargetEnum.AMAZON_FORECAST_LIST_WHAT_IF_FORECAST_EXPORTS) {{
                maxResults = "modi";
                nextToken = "nam";
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "ipsam";
                xAmzDate = "vel";
                xAmzSecurityToken = "alias";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "non";
            }};            

            ListWhatIfForecastExportsResponse res = sdk.sdk.listWhatIfForecastExports(req);

            if (res.listWhatIfForecastExportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWhatIfForecasts

Returns a list of what-if forecasts created using the <a>CreateWhatIfForecast</a> operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the <a>DescribeWhatIfForecast</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWhatIfForecastsRequest;
import org.openapis.openapi.models.operations.ListWhatIfForecastsResponse;
import org.openapis.openapi.models.operations.ListWhatIfForecastsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterConditionStringEnum;
import org.openapis.openapi.models.shared.ListWhatIfForecastsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWhatIfForecastsRequest req = new ListWhatIfForecastsRequest(                new ListWhatIfForecastsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter(FilterConditionStringEnum.IS, "nemo", "reprehenderit") {{
                                        condition = FilterConditionStringEnum.IS_NOT;
                                        key = "nulla";
                                        value = "deserunt";
                                    }}),
                                    add(new Filter(FilterConditionStringEnum.IS_NOT, "impedit", "hic") {{
                                        condition = FilterConditionStringEnum.IS_NOT;
                                        key = "quis";
                                        value = "sint";
                                    }}),
                                }};
                                maxResults = 900103L;
                                nextToken = "asperiores";
                            }};, ListWhatIfForecastsXAmzTargetEnum.AMAZON_FORECAST_LIST_WHAT_IF_FORECASTS) {{
                maxResults = "ex";
                nextToken = "voluptas";
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quae";
                xAmzDate = "minus";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "consectetur";
            }};            

            ListWhatIfForecastsResponse res = sdk.sdk.listWhatIfForecasts(req);

            if (res.listWhatIfForecastsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resumeResource

Resumes a stopped monitor resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResumeResourceRequest;
import org.openapis.openapi.models.operations.ResumeResourceResponse;
import org.openapis.openapi.models.operations.ResumeResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResumeResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResumeResourceRequest req = new ResumeResourceRequest(                new ResumeResourceRequest("atque");, ResumeResourceXAmzTargetEnum.AMAZON_FORECAST_RESUME_RESOURCE) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "magni";
                xAmzDate = "soluta";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "dolore";
            }};            

            ResumeResourceResponse res = sdk.sdk.resumeResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopResource

<p>Stops a resource.</p> <p>The resource undergoes the following states: <code>CREATE_STOPPING</code> and <code>CREATE_STOPPED</code>. You cannot resume a resource once it has been stopped.</p> <p>This operation can be applied to the following resources (and their corresponding child resources):</p> <ul> <li> <p>Dataset Import Job</p> </li> <li> <p>Predictor Job</p> </li> <li> <p>Forecast Job</p> </li> <li> <p>Forecast Export Job</p> </li> <li> <p>Predictor Backtest Export Job</p> </li> <li> <p>Explainability Job</p> </li> <li> <p>Explainability Export Job</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopResourceRequest;
import org.openapis.openapi.models.operations.StopResourceResponse;
import org.openapis.openapi.models.operations.StopResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopResourceRequest req = new StopResourceRequest(                new StopResourceRequest("voluptate");, StopResourceXAmzTargetEnum.AMAZON_FORECAST_STOP_RESOURCE) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "neque";
                xAmzDate = "quo";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "iure";
            }};            

            StopResourceResponse res = sdk.sdk.stopResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("voluptatibus",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("inventore", "facere") {{
                                                    key = "magnam";
                                                    value = "quibusdam";
                                                }}),
                                                add(new Tag("voluptatibus", "quia") {{
                                                    key = "libero";
                                                    value = "architecto";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AMAZON_FORECAST_TAG_RESOURCE) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "velit";
                xAmzDate = "illo";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "ea";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Deletes the specified tags from a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("vero",                 new String[]{{
                                                add("eum"),
                                                add("velit"),
                                                add("ut"),
                                            }});, UntagResourceXAmzTargetEnum.AMAZON_FORECAST_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "perspiciatis";
                xAmzContentSha256 = "earum";
                xAmzCredential = "dicta";
                xAmzDate = "impedit";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "itaque";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDatasetGroup

<p>Replaces the datasets in a dataset group with the specified datasets.</p> <note> <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation to get the status.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDatasetGroupRequest;
import org.openapis.openapi.models.operations.UpdateDatasetGroupResponse;
import org.openapis.openapi.models.operations.UpdateDatasetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDatasetGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDatasetGroupRequest req = new UpdateDatasetGroupRequest(                new UpdateDatasetGroupRequest(                new String[]{{
                                                add("itaque"),
                                                add("velit"),
                                            }}, "laborum");, UpdateDatasetGroupXAmzTargetEnum.AMAZON_FORECAST_UPDATE_DATASET_GROUP) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "iusto";
                xAmzDate = "sit";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "officia";
            }};            

            UpdateDatasetGroupResponse res = sdk.sdk.updateDatasetGroup(req);

            if (res.updateDatasetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
