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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAutoPredictorRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAutoPredictorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataConfig;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalDataset;
use \OpenAPI\OpenAPI\Models\Shared\AttributeConfig;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitorConfig;
use \OpenAPI\OpenAPI\Models\Shared\OptimizationMetricEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TimeAlignmentBoundary;
use \OpenAPI\OpenAPI\Models\Shared\DayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonthEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAutoPredictorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAutoPredictorRequest();
    $request->createAutoPredictorRequest = new CreateAutoPredictorRequest();
    $request->createAutoPredictorRequest->dataConfig = new DataConfig();
    $request->createAutoPredictorRequest->dataConfig->additionalDatasets = [
        new AdditionalDataset(),
        new AdditionalDataset(),
        new AdditionalDataset(),
    ];
    $request->createAutoPredictorRequest->dataConfig->attributeConfigs = [
        new AttributeConfig(),
    ];
    $request->createAutoPredictorRequest->dataConfig->datasetGroupArn = 'ipsam';
    $request->createAutoPredictorRequest->encryptionConfig = new EncryptionConfig();
    $request->createAutoPredictorRequest->encryptionConfig->kmsKeyArn = 'repellendus';
    $request->createAutoPredictorRequest->encryptionConfig->roleArn = 'sapiente';
    $request->createAutoPredictorRequest->explainPredictor = false;
    $request->createAutoPredictorRequest->forecastDimensions = [
        'odit',
        'at',
        'at',
        'maiores',
    ];
    $request->createAutoPredictorRequest->forecastFrequency = 'molestiae';
    $request->createAutoPredictorRequest->forecastHorizon = 799159;
    $request->createAutoPredictorRequest->forecastTypes = [
        'esse',
        'totam',
        'porro',
        'dolorum',
    ];
    $request->createAutoPredictorRequest->monitorConfig = new MonitorConfig();
    $request->createAutoPredictorRequest->monitorConfig->monitorName = 'dicta';
    $request->createAutoPredictorRequest->optimizationMetric = OptimizationMetricEnum::MASE;
    $request->createAutoPredictorRequest->predictorName = 'officia';
    $request->createAutoPredictorRequest->referencePredictorArn = 'occaecati';
    $request->createAutoPredictorRequest->tags = [
        new Tag(),
    ];
    $request->createAutoPredictorRequest->timeAlignmentBoundary = new TimeAlignmentBoundary();
    $request->createAutoPredictorRequest->timeAlignmentBoundary->dayOfMonth = 537373;
    $request->createAutoPredictorRequest->timeAlignmentBoundary->dayOfWeek = DayOfWeekEnum::SUNDAY;
    $request->createAutoPredictorRequest->timeAlignmentBoundary->hour = 758616;
    $request->createAutoPredictorRequest->timeAlignmentBoundary->month = MonthEnum::JULY;
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = CreateAutoPredictorXAmzTargetEnum::AMAZON_FORECAST_CREATE_AUTO_PREDICTOR;

    $response = $sdk->sdk->createAutoPredictor($request);

    if ($response->createAutoPredictorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataset

<p>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:</p> <ul> <li> <p> <i> <code>DataFrequency</code> </i> - How frequently your historical time-series data is collected.</p> </li> <li> <p> <i> <code>Domain</code> </i> and <i> <code>DatasetType</code> </i> - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields.</p> </li> <li> <p> <i> <code>Schema</code> </i> - A schema specifies the fields in the dataset, including the field name and data type.</p> </li> </ul> <p>After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Importing datasets</a>.</p> <p>To get a list of all your datasets, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation.</p> <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub repository</a>.</p> <note> <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import training data. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation to get the status.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatasetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\Schema;
use \OpenAPI\OpenAPI\Models\Shared\SchemaAttribute;
use \OpenAPI\OpenAPI\Models\Shared\AttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatasetRequest();
    $request->createDatasetRequest = new CreateDatasetRequest();
    $request->createDatasetRequest->dataFrequency = 'esse';
    $request->createDatasetRequest->datasetName = 'ipsum';
    $request->createDatasetRequest->datasetType = DatasetTypeEnum::RELATED_TIME_SERIES;
    $request->createDatasetRequest->domain = DomainEnum::RETAIL;
    $request->createDatasetRequest->encryptionConfig = new EncryptionConfig();
    $request->createDatasetRequest->encryptionConfig->kmsKeyArn = 'perferendis';
    $request->createDatasetRequest->encryptionConfig->roleArn = 'ad';
    $request->createDatasetRequest->schema = new Schema();
    $request->createDatasetRequest->schema->attributes = [
        new SchemaAttribute(),
        new SchemaAttribute(),
        new SchemaAttribute(),
    ];
    $request->createDatasetRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = CreateDatasetXAmzTargetEnum::AMAZON_FORECAST_CREATE_DATASET;

    $response = $sdk->sdk->createDataset($request);

    if ($response->createDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDatasetGroup

<p>Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation.</p> <p>After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Dataset groups</a>.</p> <p>To get a list of all your datasets groups, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation.</p> <note> <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDatasetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DomainEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatasetGroupRequest();
    $request->createDatasetGroupRequest = new CreateDatasetGroupRequest();
    $request->createDatasetGroupRequest->datasetArns = [
        'corporis',
        'iste',
    ];
    $request->createDatasetGroupRequest->datasetGroupName = 'iure';
    $request->createDatasetGroupRequest->domain = DomainEnum::METRICS;
    $request->createDatasetGroupRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = CreateDatasetGroupXAmzTargetEnum::AMAZON_FORECAST_CREATE_DATASET_GROUP;

    $response = $sdk->sdk->createDatasetGroup($request);

    if ($response->createDatasetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDatasetImportJob

<p>Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to.</p> <p>You must specify a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DataSource.html">DataSource</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an internal Amazon Web Services system. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-iam-roles.html">Set up permissions</a>.</p> <p>The training data must be in CSV or Parquet format. The delimiter must be a comma (,).</p> <p>You can specify the path to a specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files.</p> <p>Because dataset imports are not aggregated, your most recent dataset import is the one that is used when training a predictor or generating a forecast. Make sure that your most recent dataset import contains all of the data you want to model off of, and not just the new data collected since the previous import.</p> <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDatasetImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\S3Config;
use \OpenAPI\OpenAPI\Models\Shared\ImportModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetImportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatasetImportJobRequest();
    $request->createDatasetImportJobRequest = new CreateDatasetImportJobRequest();
    $request->createDatasetImportJobRequest->dataSource = new DataSource();
    $request->createDatasetImportJobRequest->dataSource->s3Config = new S3Config();
    $request->createDatasetImportJobRequest->dataSource->s3Config->kmsKeyArn = 'dolorem';
    $request->createDatasetImportJobRequest->dataSource->s3Config->path = 'corporis';
    $request->createDatasetImportJobRequest->dataSource->s3Config->roleArn = 'explicabo';
    $request->createDatasetImportJobRequest->datasetArn = 'nobis';
    $request->createDatasetImportJobRequest->datasetImportJobName = 'enim';
    $request->createDatasetImportJobRequest->format = 'omnis';
    $request->createDatasetImportJobRequest->geolocationFormat = 'nemo';
    $request->createDatasetImportJobRequest->importMode = ImportModeEnum::FULL;
    $request->createDatasetImportJobRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createDatasetImportJobRequest->timeZone = 'accusantium';
    $request->createDatasetImportJobRequest->timestampFormat = 'iure';
    $request->createDatasetImportJobRequest->useGeolocationForTimeZone = false;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = CreateDatasetImportJobXAmzTargetEnum::AMAZON_FORECAST_CREATE_DATASET_IMPORT_JOB;

    $response = $sdk->sdk->createDatasetImportJob($request);

    if ($response->createDatasetImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createExplainability

<note> <p>Explainability is only available for Forecasts and Predictors generated from an AutoPredictor (<a>CreateAutoPredictor</a>)</p> </note> <p>Creates an Amazon Forecast Explainability.</p> <p>Explainability helps you better understand how the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative impact of each attribute and determine whether they increase or decrease forecast values.</p> <p>To enable Forecast Explainability, your predictor must include at least one of the following: related time series, item metadata, or additional datasets like Holidays and the Weather Index.</p> <p>CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a Forecast ARN.</p> <p> <b>CreateExplainability with a Predictor ARN</b> </p> <note> <p>You can only have one Explainability resource per predictor. If you already enabled <code>ExplainPredictor</code> in <a>CreateAutoPredictor</a>, that predictor already has an Explainability resource.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the predictor.</p> </li> <li> <p> <code>TimePointGranularity</code> - Must be set to “ALL”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Must be set to “ALL”.</p> </li> </ul> <p>Do not specify a value for the following parameters:</p> <ul> <li> <p> <code>DataSource</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>Schema</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>StartDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>EndDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> </ul> <p> <b>CreateExplainability with a Forecast ARN</b> </p> <note> <p>You can specify a maximum of 50 time series and 500 time points.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the forecast.</p> </li> <li> <p> <code>TimePointGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> </ul> <p>If you set TimeSeriesGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>DataSource</code> - The S3 location of the CSV file specifying your time series.</p> </li> <li> <p> <code>Schema</code> - The Schema defines the attributes and attribute types listed in the Data Source.</p> </li> </ul> <p>If you set TimePointGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>StartDateTime</code> - The first timestamp in the range of time points.</p> </li> <li> <p> <code>EndDateTime</code> - The last timestamp in the range of time points.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateExplainabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateExplainabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\S3Config;
use \OpenAPI\OpenAPI\Models\Shared\ExplainabilityConfig;
use \OpenAPI\OpenAPI\Models\Shared\TimePointGranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesGranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schema;
use \OpenAPI\OpenAPI\Models\Shared\SchemaAttribute;
use \OpenAPI\OpenAPI\Models\Shared\AttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateExplainabilityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExplainabilityRequest();
    $request->createExplainabilityRequest = new CreateExplainabilityRequest();
    $request->createExplainabilityRequest->dataSource = new DataSource();
    $request->createExplainabilityRequest->dataSource->s3Config = new S3Config();
    $request->createExplainabilityRequest->dataSource->s3Config->kmsKeyArn = 'consequuntur';
    $request->createExplainabilityRequest->dataSource->s3Config->path = 'repellat';
    $request->createExplainabilityRequest->dataSource->s3Config->roleArn = 'mollitia';
    $request->createExplainabilityRequest->enableVisualization = false;
    $request->createExplainabilityRequest->endDateTime = 'occaecati';
    $request->createExplainabilityRequest->explainabilityConfig = new ExplainabilityConfig();
    $request->createExplainabilityRequest->explainabilityConfig->timePointGranularity = TimePointGranularityEnum::ALL;
    $request->createExplainabilityRequest->explainabilityConfig->timeSeriesGranularity = TimeSeriesGranularityEnum::ALL;
    $request->createExplainabilityRequest->explainabilityName = 'quam';
    $request->createExplainabilityRequest->resourceArn = 'molestiae';
    $request->createExplainabilityRequest->schema = new Schema();
    $request->createExplainabilityRequest->schema->attributes = [
        new SchemaAttribute(),
    ];
    $request->createExplainabilityRequest->startDateTime = 'error';
    $request->createExplainabilityRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = CreateExplainabilityXAmzTargetEnum::AMAZON_FORECAST_CREATE_EXPLAINABILITY;

    $response = $sdk->sdk->createExplainability($request);

    if ($response->createExplainabilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createExplainabilityExport

<p>Exports an Explainability resource created by the <a>CreateExplainability</a> operation. Exported files are exported to an Amazon Simple Storage Service (Amazon S3) bucket.</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribeExplainabilityExport</a> operation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateExplainabilityExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateExplainabilityExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataDestination;
use \OpenAPI\OpenAPI\Models\Shared\S3Config;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateExplainabilityExportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExplainabilityExportRequest();
    $request->createExplainabilityExportRequest = new CreateExplainabilityExportRequest();
    $request->createExplainabilityExportRequest->destination = new DataDestination();
    $request->createExplainabilityExportRequest->destination->s3Config = new S3Config();
    $request->createExplainabilityExportRequest->destination->s3Config->kmsKeyArn = 'sequi';
    $request->createExplainabilityExportRequest->destination->s3Config->path = 'tenetur';
    $request->createExplainabilityExportRequest->destination->s3Config->roleArn = 'ipsam';
    $request->createExplainabilityExportRequest->explainabilityArn = 'id';
    $request->createExplainabilityExportRequest->explainabilityExportName = 'possimus';
    $request->createExplainabilityExportRequest->format = 'aut';
    $request->createExplainabilityExportRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = CreateExplainabilityExportXAmzTargetEnum::AMAZON_FORECAST_CREATE_EXPLAINABILITY_EXPORT;

    $response = $sdk->sdk->createExplainabilityExport($request);

    if ($response->createExplainabilityExportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createForecast

<p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p> <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which you specify in the <a>CreatePredictor</a> request. When you query a forecast, you can request a specific date range within the forecast.</p> <p>To get a list of all your forecasts, use the <a>ListForecasts</a> operation.</p> <note> <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was used to create the predictor.</p> </note> <p>For more information, see <a>howitworks-forecast</a>.</p> <note> <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query or export the forecast. Use the <a>DescribeForecast</a> operation to get the status.</p> </note> <p>By default, a forecast includes predictions for every item (<code>item_id</code>) in the dataset group that was used to train the predictor. However, you can use the <code>TimeSeriesSelector</code> object to generate a forecast on a subset of time series. Forecast creation is skipped for any time series that you specify that are not in the input dataset. The forecast export file will not contain these time series or their forecasted values.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateForecastRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateForecastRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesSelector;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesIdentifiers;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\S3Config;
use \OpenAPI\OpenAPI\Models\Shared\Schema;
use \OpenAPI\OpenAPI\Models\Shared\SchemaAttribute;
use \OpenAPI\OpenAPI\Models\Shared\AttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateForecastXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateForecastRequest();
    $request->createForecastRequest = new CreateForecastRequest();
    $request->createForecastRequest->forecastName = 'nihil';
    $request->createForecastRequest->forecastTypes = [
        'voluptatibus',
        'ipsa',
        'omnis',
    ];
    $request->createForecastRequest->predictorArn = 'voluptate';
    $request->createForecastRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createForecastRequest->timeSeriesSelector = new TimeSeriesSelector();
    $request->createForecastRequest->timeSeriesSelector->timeSeriesIdentifiers = new TimeSeriesIdentifiers();
    $request->createForecastRequest->timeSeriesSelector->timeSeriesIdentifiers->dataSource = new DataSource();
    $request->createForecastRequest->timeSeriesSelector->timeSeriesIdentifiers->dataSource->s3Config = new S3Config();
    $request->createForecastRequest->timeSeriesSelector->timeSeriesIdentifiers->dataSource->s3Config->kmsKeyArn = 'perferendis';
    $request->createForecastRequest->timeSeriesSelector->timeSeriesIdentifiers->dataSource->s3Config->path = 'doloremque';
    $request->createForecastRequest->timeSeriesSelector->timeSeriesIdentifiers->dataSource->s3Config->roleArn = 'reprehenderit';
    $request->createForecastRequest->timeSeriesSelector->timeSeriesIdentifiers->format = 'ut';
    $request->createForecastRequest->timeSeriesSelector->timeSeriesIdentifiers->schema = new Schema();
    $request->createForecastRequest->timeSeriesSelector->timeSeriesIdentifiers->schema->attributes = [
        new SchemaAttribute(),
        new SchemaAttribute(),
        new SchemaAttribute(),
        new SchemaAttribute(),
    ];
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = CreateForecastXAmzTargetEnum::AMAZON_FORECAST_CREATE_FORECAST;

    $response = $sdk->sdk->createForecast($request);

    if ($response->createForecastResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createForecastExportJob

<p>Exports a forecast created by the <a>CreateForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p>&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</p> <p>where the &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your forecast export jobs, use the <a>ListForecastExportJobs</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateForecastExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateForecastExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataDestination;
use \OpenAPI\OpenAPI\Models\Shared\S3Config;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateForecastExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateForecastExportJobRequest();
    $request->createForecastExportJobRequest = new CreateForecastExportJobRequest();
    $request->createForecastExportJobRequest->destination = new DataDestination();
    $request->createForecastExportJobRequest->destination->s3Config = new S3Config();
    $request->createForecastExportJobRequest->destination->s3Config->kmsKeyArn = 'accusamus';
    $request->createForecastExportJobRequest->destination->s3Config->path = 'commodi';
    $request->createForecastExportJobRequest->destination->s3Config->roleArn = 'repudiandae';
    $request->createForecastExportJobRequest->forecastArn = 'quae';
    $request->createForecastExportJobRequest->forecastExportJobName = 'ipsum';
    $request->createForecastExportJobRequest->format = 'quidem';
    $request->createForecastExportJobRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = CreateForecastExportJobXAmzTargetEnum::AMAZON_FORECAST_CREATE_FORECAST_EXPORT_JOB;

    $response = $sdk->sdk->createForecastExportJob($request);

    if ($response->createForecastExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMonitor

Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see how your predictor's performance changes over time. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring.html">Predictor Monitoring</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMonitorRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMonitorRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateMonitorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMonitorRequest();
    $request->createMonitorRequest = new CreateMonitorRequest();
    $request->createMonitorRequest->monitorName = 'repudiandae';
    $request->createMonitorRequest->resourceArn = 'sint';
    $request->createMonitorRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = CreateMonitorXAmzTargetEnum::AMAZON_FORECAST_CREATE_MONITOR;

    $response = $sdk->sdk->createMonitor($request);

    if ($response->createMonitorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPredictor

<note> <p> This operation creates a legacy predictor that does not include all the predictor functionalities provided by Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use <a>CreateAutoPredictor</a>.</p> </note> <p>Creates an Amazon Forecast predictor.</p> <p>In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters.</p> <p>Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the <a>CreateForecast</a> operation.</p> <p> To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation. </p> <p>You can specify a featurization configuration to fill and aggregate the data fields in the <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more information, see <a>FeaturizationConfig</a>.</p> <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the <code>DataFrequency</code> specified when the dataset was created matches the <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p> <p>By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9 (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor by setting the <code>ForecastTypes</code>. </p> <p> <b>AutoML</b> </p> <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The <code>objective function</code> is defined as the mean of the weighted losses over the forecast types. By default, these are the p10, p50, and p90 quantile losses. For more information, see <a>EvaluationResult</a>.</p> <p>When AutoML is enabled, the following properties are disallowed:</p> <ul> <li> <p> <code>AlgorithmArn</code> </p> </li> <li> <p> <code>HPOConfig</code> </p> </li> <li> <p> <code>PerformHPO</code> </p> </li> <li> <p> <code>TrainingParameters</code> </p> </li> </ul> <p>To get a list of all of your predictors, use the <a>ListPredictors</a> operation.</p> <note> <p>Before you can use the predictor to create a forecast, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePredictorRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePredictorRequest;
use \OpenAPI\OpenAPI\Models\Shared\AutoMLOverrideStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\EvaluationParameters;
use \OpenAPI\OpenAPI\Models\Shared\FeaturizationConfig;
use \OpenAPI\OpenAPI\Models\Shared\Featurization;
use \OpenAPI\OpenAPI\Models\Shared\FeaturizationMethod;
use \OpenAPI\OpenAPI\Models\Shared\FeaturizationMethodNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\HyperParameterTuningJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\ParameterRanges;
use \OpenAPI\OpenAPI\Models\Shared\CategoricalParameterRange;
use \OpenAPI\OpenAPI\Models\Shared\ContinuousParameterRange;
use \OpenAPI\OpenAPI\Models\Shared\ScalingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegerParameterRange;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\SupplementaryFeature;
use \OpenAPI\OpenAPI\Models\Shared\OptimizationMetricEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreatePredictorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePredictorRequest();
    $request->createPredictorRequest = new CreatePredictorRequest();
    $request->createPredictorRequest->algorithmArn = 'deserunt';
    $request->createPredictorRequest->autoMLOverrideStrategy = AutoMLOverrideStrategyEnum::ACCURACY_OPTIMIZED;
    $request->createPredictorRequest->encryptionConfig = new EncryptionConfig();
    $request->createPredictorRequest->encryptionConfig->kmsKeyArn = 'quibusdam';
    $request->createPredictorRequest->encryptionConfig->roleArn = 'labore';
    $request->createPredictorRequest->evaluationParameters = new EvaluationParameters();
    $request->createPredictorRequest->evaluationParameters->backTestWindowOffset = 264730;
    $request->createPredictorRequest->evaluationParameters->numberOfBacktestWindows = 183191;
    $request->createPredictorRequest->featurizationConfig = new FeaturizationConfig();
    $request->createPredictorRequest->featurizationConfig->featurizations = [
        new Featurization(),
        new Featurization(),
    ];
    $request->createPredictorRequest->featurizationConfig->forecastDimensions = [
        'quos',
        'perferendis',
        'magni',
    ];
    $request->createPredictorRequest->featurizationConfig->forecastFrequency = 'assumenda';
    $request->createPredictorRequest->forecastHorizon = 369808;
    $request->createPredictorRequest->forecastTypes = [
        'fugit',
    ];
    $request->createPredictorRequest->hpoConfig = new HyperParameterTuningJobConfig();
    $request->createPredictorRequest->hpoConfig->parameterRanges = new ParameterRanges();
    $request->createPredictorRequest->hpoConfig->parameterRanges->categoricalParameterRanges = [
        new CategoricalParameterRange(),
        new CategoricalParameterRange(),
        new CategoricalParameterRange(),
    ];
    $request->createPredictorRequest->hpoConfig->parameterRanges->continuousParameterRanges = [
        new ContinuousParameterRange(),
        new ContinuousParameterRange(),
        new ContinuousParameterRange(),
    ];
    $request->createPredictorRequest->hpoConfig->parameterRanges->integerParameterRanges = [
        new IntegerParameterRange(),
        new IntegerParameterRange(),
    ];
    $request->createPredictorRequest->inputDataConfig = new InputDataConfig();
    $request->createPredictorRequest->inputDataConfig->datasetGroupArn = 'facilis';
    $request->createPredictorRequest->inputDataConfig->supplementaryFeatures = [
        new SupplementaryFeature(),
        new SupplementaryFeature(),
        new SupplementaryFeature(),
    ];
    $request->createPredictorRequest->optimizationMetric = OptimizationMetricEnum::RMSE;
    $request->createPredictorRequest->performAutoML = false;
    $request->createPredictorRequest->performHPO = false;
    $request->createPredictorRequest->predictorName = 'delectus';
    $request->createPredictorRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createPredictorRequest->trainingParameters = [
        'eligendi' => 'sint',
    ];
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = CreatePredictorXAmzTargetEnum::AMAZON_FORECAST_CREATE_PREDICTOR;

    $response = $sdk->sdk->createPredictor($request);

    if ($response->createPredictorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPredictorBacktestExportJob

<p>Exports backtest forecasts and accuracy metrics generated by the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. Two folders containing CSV or Parquet files are exported to your specified S3 bucket.</p> <p> The export file names will match the following conventions:</p> <p> <code>&lt;ExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;.csv</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDate format (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribePredictorBacktestExportJob</a> operation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePredictorBacktestExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePredictorBacktestExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataDestination;
use \OpenAPI\OpenAPI\Models\Shared\S3Config;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreatePredictorBacktestExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePredictorBacktestExportJobRequest();
    $request->createPredictorBacktestExportJobRequest = new CreatePredictorBacktestExportJobRequest();
    $request->createPredictorBacktestExportJobRequest->destination = new DataDestination();
    $request->createPredictorBacktestExportJobRequest->destination->s3Config = new S3Config();
    $request->createPredictorBacktestExportJobRequest->destination->s3Config->kmsKeyArn = 'a';
    $request->createPredictorBacktestExportJobRequest->destination->s3Config->path = 'dolorum';
    $request->createPredictorBacktestExportJobRequest->destination->s3Config->roleArn = 'in';
    $request->createPredictorBacktestExportJobRequest->format = 'in';
    $request->createPredictorBacktestExportJobRequest->predictorArn = 'illum';
    $request->createPredictorBacktestExportJobRequest->predictorBacktestExportJobName = 'maiores';
    $request->createPredictorBacktestExportJobRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = CreatePredictorBacktestExportJobXAmzTargetEnum::AMAZON_FORECAST_CREATE_PREDICTOR_BACKTEST_EXPORT_JOB;

    $response = $sdk->sdk->createPredictorBacktestExportJob($request);

    if ($response->createPredictorBacktestExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWhatIfAnalysis

<p>What-if analysis is a scenario modeling technique where you make a hypothetical change to a time series and compare the forecasts generated by these changes against the baseline, unchanged time series. It is important to remember that the purpose of a what-if analysis is to understand how a forecast can change given different modifications to the baseline time series.</p> <p>For example, imagine you are a clothing retailer who is considering an end of season sale to clear space for new styles. After creating a baseline forecast, you can use a what-if analysis to investigate how different sales tactics might affect your goals.</p> <p>You could create a scenario where everything is given a 25% markdown, and another where everything is given a fixed dollar markdown. You could create a scenario where the sale lasts for one week and another where the sale lasts for one month. With a what-if analysis, you can compare many different scenarios against each other.</p> <p>Note that a what-if analysis is meant to display what the forecasting model has learned and how it will behave in the scenarios that you are evaluating. Do not blindly use the results of the what-if analysis to make business decisions. For instance, forecasts might not be accurate for novel scenarios where there is no reference available to determine whether a forecast is good.</p> <p>The <a>TimeSeriesSelector</a> object defines the items that you want in the what-if analysis.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWhatIfAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWhatIfAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesSelector;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesIdentifiers;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\S3Config;
use \OpenAPI\OpenAPI\Models\Shared\Schema;
use \OpenAPI\OpenAPI\Models\Shared\SchemaAttribute;
use \OpenAPI\OpenAPI\Models\Shared\AttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateWhatIfAnalysisXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWhatIfAnalysisRequest();
    $request->createWhatIfAnalysisRequest = new CreateWhatIfAnalysisRequest();
    $request->createWhatIfAnalysisRequest->forecastArn = 'accusamus';
    $request->createWhatIfAnalysisRequest->tags = [
        new Tag(),
    ];
    $request->createWhatIfAnalysisRequest->timeSeriesSelector = new TimeSeriesSelector();
    $request->createWhatIfAnalysisRequest->timeSeriesSelector->timeSeriesIdentifiers = new TimeSeriesIdentifiers();
    $request->createWhatIfAnalysisRequest->timeSeriesSelector->timeSeriesIdentifiers->dataSource = new DataSource();
    $request->createWhatIfAnalysisRequest->timeSeriesSelector->timeSeriesIdentifiers->dataSource->s3Config = new S3Config();
    $request->createWhatIfAnalysisRequest->timeSeriesSelector->timeSeriesIdentifiers->dataSource->s3Config->kmsKeyArn = 'occaecati';
    $request->createWhatIfAnalysisRequest->timeSeriesSelector->timeSeriesIdentifiers->dataSource->s3Config->path = 'enim';
    $request->createWhatIfAnalysisRequest->timeSeriesSelector->timeSeriesIdentifiers->dataSource->s3Config->roleArn = 'accusamus';
    $request->createWhatIfAnalysisRequest->timeSeriesSelector->timeSeriesIdentifiers->format = 'delectus';
    $request->createWhatIfAnalysisRequest->timeSeriesSelector->timeSeriesIdentifiers->schema = new Schema();
    $request->createWhatIfAnalysisRequest->timeSeriesSelector->timeSeriesIdentifiers->schema->attributes = [
        new SchemaAttribute(),
        new SchemaAttribute(),
        new SchemaAttribute(),
    ];
    $request->createWhatIfAnalysisRequest->whatIfAnalysisName = 'provident';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = CreateWhatIfAnalysisXAmzTargetEnum::AMAZON_FORECAST_CREATE_WHAT_IF_ANALYSIS;

    $response = $sdk->sdk->createWhatIfAnalysis($request);

    if ($response->createWhatIfAnalysisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWhatIfForecast

A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWhatIfForecastRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWhatIfForecastRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesReplacementsDataSource;
use \OpenAPI\OpenAPI\Models\Shared\S3Config;
use \OpenAPI\OpenAPI\Models\Shared\Schema;
use \OpenAPI\OpenAPI\Models\Shared\SchemaAttribute;
use \OpenAPI\OpenAPI\Models\Shared\AttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesTransformation;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\OperationEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesCondition;
use \OpenAPI\OpenAPI\Models\Shared\ConditionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateWhatIfForecastXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWhatIfForecastRequest();
    $request->createWhatIfForecastRequest = new CreateWhatIfForecastRequest();
    $request->createWhatIfForecastRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createWhatIfForecastRequest->timeSeriesReplacementsDataSource = new TimeSeriesReplacementsDataSource();
    $request->createWhatIfForecastRequest->timeSeriesReplacementsDataSource->format = 'vel';
    $request->createWhatIfForecastRequest->timeSeriesReplacementsDataSource->s3Config = new S3Config();
    $request->createWhatIfForecastRequest->timeSeriesReplacementsDataSource->s3Config->kmsKeyArn = 'natus';
    $request->createWhatIfForecastRequest->timeSeriesReplacementsDataSource->s3Config->path = 'omnis';
    $request->createWhatIfForecastRequest->timeSeriesReplacementsDataSource->s3Config->roleArn = 'molestiae';
    $request->createWhatIfForecastRequest->timeSeriesReplacementsDataSource->schema = new Schema();
    $request->createWhatIfForecastRequest->timeSeriesReplacementsDataSource->schema->attributes = [
        new SchemaAttribute(),
    ];
    $request->createWhatIfForecastRequest->timeSeriesReplacementsDataSource->timestampFormat = 'nihil';
    $request->createWhatIfForecastRequest->timeSeriesTransformations = [
        new TimeSeriesTransformation(),
        new TimeSeriesTransformation(),
    ];
    $request->createWhatIfForecastRequest->whatIfAnalysisArn = 'distinctio';
    $request->createWhatIfForecastRequest->whatIfForecastName = 'id';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = CreateWhatIfForecastXAmzTargetEnum::AMAZON_FORECAST_CREATE_WHAT_IF_FORECAST;

    $response = $sdk->sdk->createWhatIfForecast($request);

    if ($response->createWhatIfForecastResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWhatIfForecastExport

<p>Exports a forecast created by the <a>CreateWhatIfForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p> <code>≈&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your what-if forecast export jobs, use the <a>ListWhatIfForecastExports</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWhatIfForecastExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWhatIfForecastExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataDestination;
use \OpenAPI\OpenAPI\Models\Shared\S3Config;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateWhatIfForecastExportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWhatIfForecastExportRequest();
    $request->createWhatIfForecastExportRequest = new CreateWhatIfForecastExportRequest();
    $request->createWhatIfForecastExportRequest->destination = new DataDestination();
    $request->createWhatIfForecastExportRequest->destination->s3Config = new S3Config();
    $request->createWhatIfForecastExportRequest->destination->s3Config->kmsKeyArn = 'aspernatur';
    $request->createWhatIfForecastExportRequest->destination->s3Config->path = 'architecto';
    $request->createWhatIfForecastExportRequest->destination->s3Config->roleArn = 'magnam';
    $request->createWhatIfForecastExportRequest->format = 'et';
    $request->createWhatIfForecastExportRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createWhatIfForecastExportRequest->whatIfForecastArns = [
        'provident',
        'quos',
    ];
    $request->createWhatIfForecastExportRequest->whatIfForecastExportName = 'sint';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = CreateWhatIfForecastExportXAmzTargetEnum::AMAZON_FORECAST_CREATE_WHAT_IF_FORECAST_EXPORT;

    $response = $sdk->sdk->createWhatIfForecastExport($request);

    if ($response->createWhatIfForecastExportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataset

<p>Deletes an Amazon Forecast dataset that was created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. You can only delete datasets that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.</p> <note> <p>Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update the dataset group, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation, omitting the deleted dataset's ARN.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDatasetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatasetRequest();
    $request->deleteDatasetRequest = new DeleteDatasetRequest();
    $request->deleteDatasetRequest->datasetArn = 'necessitatibus';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = DeleteDatasetXAmzTargetEnum::AMAZON_FORECAST_DELETE_DATASET;

    $response = $sdk->sdk->deleteDataset($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDatasetGroup

<p>Deletes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. You can only delete dataset groups that have a status of <code>ACTIVE</code>, <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> <p>This operation deletes only the dataset group, not the datasets in the group.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDatasetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatasetGroupRequest();
    $request->deleteDatasetGroupRequest = new DeleteDatasetGroupRequest();
    $request->deleteDatasetGroupRequest->datasetGroupArn = 'maxime';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = DeleteDatasetGroupXAmzTargetEnum::AMAZON_FORECAST_DELETE_DATASET_GROUP;

    $response = $sdk->sdk->deleteDatasetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDatasetImportJob

Deletes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDatasetImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetImportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatasetImportJobRequest();
    $request->deleteDatasetImportJobRequest = new DeleteDatasetImportJobRequest();
    $request->deleteDatasetImportJobRequest->datasetImportJobArn = 'expedita';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = DeleteDatasetImportJobXAmzTargetEnum::AMAZON_FORECAST_DELETE_DATASET_IMPORT_JOB;

    $response = $sdk->sdk->deleteDatasetImportJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteExplainability

<p>Deletes an Explainability resource.</p> <p>You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeExplainability</a> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteExplainabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteExplainabilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteExplainabilityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteExplainabilityRequest();
    $request->deleteExplainabilityRequest = new DeleteExplainabilityRequest();
    $request->deleteExplainabilityRequest->explainabilityArn = 'consequuntur';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = DeleteExplainabilityXAmzTargetEnum::AMAZON_FORECAST_DELETE_EXPLAINABILITY;

    $response = $sdk->sdk->deleteExplainability($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteExplainabilityExport

Deletes an Explainability export.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteExplainabilityExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteExplainabilityExportRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteExplainabilityExportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteExplainabilityExportRequest();
    $request->deleteExplainabilityExportRequest = new DeleteExplainabilityExportRequest();
    $request->deleteExplainabilityExportRequest->explainabilityExportArn = 'maxime';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DeleteExplainabilityExportXAmzTargetEnum::AMAZON_FORECAST_DELETE_EXPLAINABILITY_EXPORT;

    $response = $sdk->sdk->deleteExplainabilityExport($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteForecast

<p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecast</a> operation.</p> <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you can no longer query the forecast.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteForecastRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteForecastRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteForecastXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteForecastRequest();
    $request->deleteForecastRequest = new DeleteForecastRequest();
    $request->deleteForecastRequest->forecastArn = 'quidem';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = DeleteForecastXAmzTargetEnum::AMAZON_FORECAST_DELETE_FORECAST;

    $response = $sdk->sdk->deleteForecast($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteForecastExportJob

Deletes a forecast export job created using the <a>CreateForecastExportJob</a> operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteForecastExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteForecastExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteForecastExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteForecastExportJobRequest();
    $request->deleteForecastExportJobRequest = new DeleteForecastExportJobRequest();
    $request->deleteForecastExportJobRequest->forecastExportJobArn = 'voluptatibus';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = DeleteForecastExportJobXAmzTargetEnum::AMAZON_FORECAST_DELETE_FORECAST_EXPORT_JOB;

    $response = $sdk->sdk->deleteForecastExportJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMonitor

Deletes a monitor resource. You can only delete a monitor resource with a status of <code>ACTIVE</code>, <code>ACTIVE_STOPPED</code>, <code>CREATE_FAILED</code>, or <code>CREATE_STOPPED</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMonitorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMonitorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMonitorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMonitorRequest();
    $request->deleteMonitorRequest = new DeleteMonitorRequest();
    $request->deleteMonitorRequest->monitorArn = 'libero';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = DeleteMonitorXAmzTargetEnum::AMAZON_FORECAST_DELETE_MONITOR;

    $response = $sdk->sdk->deleteMonitor($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePredictor

Deletes a predictor created using the <a>DescribePredictor</a> or <a>CreatePredictor</a> operations. You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribePredictor</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePredictorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePredictorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePredictorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePredictorRequest();
    $request->deletePredictorRequest = new DeletePredictorRequest();
    $request->deletePredictorRequest->predictorArn = 'nesciunt';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DeletePredictorXAmzTargetEnum::AMAZON_FORECAST_DELETE_PREDICTOR;

    $response = $sdk->sdk->deletePredictor($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePredictorBacktestExportJob

Deletes a predictor backtest export job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePredictorBacktestExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePredictorBacktestExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePredictorBacktestExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePredictorBacktestExportJobRequest();
    $request->deletePredictorBacktestExportJobRequest = new DeletePredictorBacktestExportJobRequest();
    $request->deletePredictorBacktestExportJobRequest->predictorBacktestExportJobArn = 'nostrum';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = DeletePredictorBacktestExportJobXAmzTargetEnum::AMAZON_FORECAST_DELETE_PREDICTOR_BACKTEST_EXPORT_JOB;

    $response = $sdk->sdk->deletePredictorBacktestExportJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourceTree

<p>Deletes an entire resource tree. This operation will delete the parent resource and its child resources.</p> <p>Child resources are resources that were created from another resource. For example, when a forecast is generated from a predictor, the forecast is the child resource and the predictor is the parent resource.</p> <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p> <ul> <li> <p> <b>Dataset</b>: dataset import jobs</p> </li> <li> <p> <b>Dataset Group</b>: predictors, predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Predictor</b>: predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Forecast</b>: forecast export jobs</p> </li> </ul> <note> <p> <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not delete datasets or exported files stored in Amazon S3. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceTreeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourceTreeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceTreeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourceTreeRequest();
    $request->deleteResourceTreeRequest = new DeleteResourceTreeRequest();
    $request->deleteResourceTreeRequest->resourceArn = 'consequuntur';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = DeleteResourceTreeXAmzTargetEnum::AMAZON_FORECAST_DELETE_RESOURCE_TREE;

    $response = $sdk->sdk->deleteResourceTree($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWhatIfAnalysis

<p>Deletes a what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation. You can delete only what-if analyses that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfAnalysis</a> operation. </p> <p>You can't delete a what-if analysis while any of its forecasts are being exported.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWhatIfAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWhatIfAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWhatIfAnalysisXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWhatIfAnalysisRequest();
    $request->deleteWhatIfAnalysisRequest = new DeleteWhatIfAnalysisRequest();
    $request->deleteWhatIfAnalysisRequest->whatIfAnalysisArn = 'earum';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = DeleteWhatIfAnalysisXAmzTargetEnum::AMAZON_FORECAST_DELETE_WHAT_IF_ANALYSIS;

    $response = $sdk->sdk->deleteWhatIfAnalysis($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWhatIfForecast

<p>Deletes a what-if forecast created using the <a>CreateWhatIfForecast</a> operation. You can delete only what-if forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecast</a> operation. </p> <p>You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWhatIfForecastRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWhatIfForecastRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWhatIfForecastXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWhatIfForecastRequest();
    $request->deleteWhatIfForecastRequest = new DeleteWhatIfForecastRequest();
    $request->deleteWhatIfForecastRequest->whatIfForecastArn = 'libero';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = DeleteWhatIfForecastXAmzTargetEnum::AMAZON_FORECAST_DELETE_WHAT_IF_FORECAST;

    $response = $sdk->sdk->deleteWhatIfForecast($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWhatIfForecastExport

Deletes a what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation. You can delete only what-if forecast exports that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWhatIfForecastExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWhatIfForecastExportRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWhatIfForecastExportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWhatIfForecastExportRequest();
    $request->deleteWhatIfForecastExportRequest = new DeleteWhatIfForecastExportRequest();
    $request->deleteWhatIfForecastExportRequest->whatIfForecastExportArn = 'qui';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = DeleteWhatIfForecastExportXAmzTargetEnum::AMAZON_FORECAST_DELETE_WHAT_IF_FORECAST_EXPORT;

    $response = $sdk->sdk->deleteWhatIfForecastExport($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAutoPredictor

Describes a predictor created using the CreateAutoPredictor operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAutoPredictorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAutoPredictorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAutoPredictorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAutoPredictorRequest();
    $request->describeAutoPredictorRequest = new DescribeAutoPredictorRequest();
    $request->describeAutoPredictorRequest->predictorArn = 'amet';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = DescribeAutoPredictorXAmzTargetEnum::AMAZON_FORECAST_DESCRIBE_AUTO_PREDICTOR;

    $response = $sdk->sdk->describeAutoPredictor($request);

    if ($response->describeAutoPredictorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDataset

<p>Describes an Amazon Forecast dataset created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation.</p> <p>In addition to listing the parameters specified in the <code>CreateDataset</code> request, this operation includes the following dataset properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDatasetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDatasetRequest();
    $request->describeDatasetRequest = new DescribeDatasetRequest();
    $request->describeDatasetRequest->datasetArn = 'quaerat';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = DescribeDatasetXAmzTargetEnum::AMAZON_FORECAST_DESCRIBE_DATASET;

    $response = $sdk->sdk->describeDataset($request);

    if ($response->describeDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDatasetGroup

<p>Describes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>DatasetArns</code> - The datasets belonging to the group.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDatasetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDatasetGroupRequest();
    $request->describeDatasetGroupRequest = new DescribeDatasetGroupRequest();
    $request->describeDatasetGroupRequest->datasetGroupArn = 'sit';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = DescribeDatasetGroupXAmzTargetEnum::AMAZON_FORECAST_DESCRIBE_DATASET_GROUP;

    $response = $sdk->sdk->describeDatasetGroup($request);

    if ($response->describeDatasetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDatasetImportJob

<p>Describes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetImportJob</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>DataSize</code> </p> </li> <li> <p> <code>FieldStatistics</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDatasetImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetImportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDatasetImportJobRequest();
    $request->describeDatasetImportJobRequest = new DescribeDatasetImportJobRequest();
    $request->describeDatasetImportJobRequest->datasetImportJobArn = 'deleniti';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = DescribeDatasetImportJobXAmzTargetEnum::AMAZON_FORECAST_DESCRIBE_DATASET_IMPORT_JOB;

    $response = $sdk->sdk->describeDatasetImportJob($request);

    if ($response->describeDatasetImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeExplainability

Describes an Explainability resource created using the <a>CreateExplainability</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExplainabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeExplainabilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExplainabilityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeExplainabilityRequest();
    $request->describeExplainabilityRequest = new DescribeExplainabilityRequest();
    $request->describeExplainabilityRequest->explainabilityArn = 'id';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DescribeExplainabilityXAmzTargetEnum::AMAZON_FORECAST_DESCRIBE_EXPLAINABILITY;

    $response = $sdk->sdk->describeExplainability($request);

    if ($response->describeExplainabilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeExplainabilityExport

Describes an Explainability export created using the <a>CreateExplainabilityExport</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExplainabilityExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeExplainabilityExportRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExplainabilityExportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeExplainabilityExportRequest();
    $request->describeExplainabilityExportRequest = new DescribeExplainabilityExportRequest();
    $request->describeExplainabilityExportRequest->explainabilityExportArn = 'ad';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = DescribeExplainabilityExportXAmzTargetEnum::AMAZON_FORECAST_DESCRIBE_EXPLAINABILITY_EXPORT;

    $response = $sdk->sdk->describeExplainabilityExport($request);

    if ($response->describeExplainabilityExportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeForecast

<p>Describes a forecast created using the <a>CreateForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetGroupArn</code> - The dataset group that provided the training data.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeForecastRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeForecastRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeForecastXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeForecastRequest();
    $request->describeForecastRequest = new DescribeForecastRequest();
    $request->describeForecastRequest->forecastArn = 'similique';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = DescribeForecastXAmzTargetEnum::AMAZON_FORECAST_DESCRIBE_FORECAST;

    $response = $sdk->sdk->describeForecast($request);

    if ($response->describeForecastResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeForecastExportJob

<p>Describes a forecast export job created using the <a>CreateForecastExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreateForecastExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeForecastExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeForecastExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeForecastExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeForecastExportJobRequest();
    $request->describeForecastExportJobRequest = new DescribeForecastExportJobRequest();
    $request->describeForecastExportJobRequest->forecastExportJobArn = 'qui';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = DescribeForecastExportJobXAmzTargetEnum::AMAZON_FORECAST_DESCRIBE_FORECAST_EXPORT_JOB;

    $response = $sdk->sdk->describeForecastExportJob($request);

    if ($response->describeForecastExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMonitor

<p>Describes a monitor resource. In addition to listing the properties provided in the <a>CreateMonitor</a> request, this operation lists the following properties:</p> <ul> <li> <p> <code>Baseline</code> </p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastEvaluationTime</code> </p> </li> <li> <p> <code>LastEvaluationState</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMonitorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMonitorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMonitorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMonitorRequest();
    $request->describeMonitorRequest = new DescribeMonitorRequest();
    $request->describeMonitorRequest->monitorArn = 'tenetur';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = DescribeMonitorXAmzTargetEnum::AMAZON_FORECAST_DESCRIBE_MONITOR;

    $response = $sdk->sdk->describeMonitor($request);

    if ($response->describeMonitorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePredictor

<note> <p> This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a legacy predictor, use <a>DescribeAutoPredictor</a>.</p> </note> <p>Describes a predictor created using the <a>CreatePredictor</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreatePredictor</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetImportJobArns</code> - The dataset import jobs used to import training data.</p> </li> <li> <p> <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were evaluated.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePredictorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePredictorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePredictorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePredictorRequest();
    $request->describePredictorRequest = new DescribePredictorRequest();
    $request->describePredictorRequest->predictorArn = 'totam';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = DescribePredictorXAmzTargetEnum::AMAZON_FORECAST_DESCRIBE_PREDICTOR;

    $response = $sdk->sdk->describePredictor($request);

    if ($response->describePredictorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePredictorBacktestExportJob

<p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreatePredictorBacktestExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> (if an error occurred)</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePredictorBacktestExportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePredictorBacktestExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePredictorBacktestExportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePredictorBacktestExportJobRequest();
    $request->describePredictorBacktestExportJobRequest = new DescribePredictorBacktestExportJobRequest();
    $request->describePredictorBacktestExportJobRequest->predictorBacktestExportJobArn = 'voluptas';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = DescribePredictorBacktestExportJobXAmzTargetEnum::AMAZON_FORECAST_DESCRIBE_PREDICTOR_BACKTEST_EXPORT_JOB;

    $response = $sdk->sdk->describePredictorBacktestExportJob($request);

    if ($response->describePredictorBacktestExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWhatIfAnalysis

<p>Describes the what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfAnalysis</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWhatIfAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeWhatIfAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWhatIfAnalysisXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWhatIfAnalysisRequest();
    $request->describeWhatIfAnalysisRequest = new DescribeWhatIfAnalysisRequest();
    $request->describeWhatIfAnalysisRequest->whatIfAnalysisArn = 'pariatur';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = DescribeWhatIfAnalysisXAmzTargetEnum::AMAZON_FORECAST_DESCRIBE_WHAT_IF_ANALYSIS;

    $response = $sdk->sdk->describeWhatIfAnalysis($request);

    if ($response->describeWhatIfAnalysisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWhatIfForecast

<p>Describes the what-if forecast created using the <a>CreateWhatIfForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWhatIfForecastRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeWhatIfForecastRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWhatIfForecastXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWhatIfForecastRequest();
    $request->describeWhatIfForecastRequest = new DescribeWhatIfForecastRequest();
    $request->describeWhatIfForecastRequest->whatIfForecastArn = 'distinctio';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = DescribeWhatIfForecastXAmzTargetEnum::AMAZON_FORECAST_DESCRIBE_WHAT_IF_FORECAST;

    $response = $sdk->sdk->describeWhatIfForecast($request);

    if ($response->describeWhatIfForecastResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWhatIfForecastExport

<p>Describes the what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecastExport</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWhatIfForecastExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeWhatIfForecastExportRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWhatIfForecastExportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWhatIfForecastExportRequest();
    $request->describeWhatIfForecastExportRequest = new DescribeWhatIfForecastExportRequest();
    $request->describeWhatIfForecastExportRequest->whatIfForecastExportArn = 'fugit';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = DescribeWhatIfForecastExportXAmzTargetEnum::AMAZON_FORECAST_DESCRIBE_WHAT_IF_FORECAST_EXPORT;

    $response = $sdk->sdk->describeWhatIfForecastExport($request);

    if ($response->describeWhatIfForecastExportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccuracyMetrics

<p>Provides metrics on the accuracy of the models that were trained by the <a>CreatePredictor</a> operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Predictor Metrics</a>.</p> <p>This operation generates metrics for each backtest window that was evaluated. The number of backtest windows (<code>NumberOfBacktestWindows</code>) is specified using the <a>EvaluationParameters</a> object, which is optionally included in the <code>CreatePredictor</code> request. If <code>NumberOfBacktestWindows</code> isn't specified, the number defaults to one.</p> <p>The parameters of the <code>filling</code> method determine which items contribute to the metrics. If you want all items to contribute, specify <code>zero</code>. If you want only those items that have complete data in the range being evaluated to contribute, specify <code>nan</code>. For more information, see <a>FeaturizationMethod</a>.</p> <note> <p>Before you can get accuracy metrics, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccuracyMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAccuracyMetricsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccuracyMetricsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccuracyMetricsRequest();
    $request->getAccuracyMetricsRequest = new GetAccuracyMetricsRequest();
    $request->getAccuracyMetricsRequest->predictorArn = 'cumque';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = GetAccuracyMetricsXAmzTargetEnum::AMAZON_FORECAST_GET_ACCURACY_METRICS;

    $response = $sdk->sdk->getAccuracyMetrics($request);

    if ($response->getAccuracyMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasetGroups

Returns a list of dataset groups created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. For each dataset group, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDatasetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasetGroupsRequest();
    $request->listDatasetGroupsRequest = new ListDatasetGroupsRequest();
    $request->listDatasetGroupsRequest->maxResults = 552193;
    $request->listDatasetGroupsRequest->nextToken = 'tempore';
    $request->maxResults = 'cupiditate';
    $request->nextToken = 'aperiam';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = ListDatasetGroupsXAmzTargetEnum::AMAZON_FORECAST_LIST_DATASET_GROUPS;

    $response = $sdk->sdk->listDatasetGroups($request);

    if ($response->listDatasetGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasetImportJobs

Returns a list of dataset import jobs created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation. You can filter the list by providing an array of <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Filter.html">Filter</a> objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDatasetImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionStringEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetImportJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasetImportJobsRequest();
    $request->listDatasetImportJobsRequest = new ListDatasetImportJobsRequest();
    $request->listDatasetImportJobsRequest->filters = [
        new Filter(),
    ];
    $request->listDatasetImportJobsRequest->maxResults = 16429;
    $request->listDatasetImportJobsRequest->nextToken = 'quas';
    $request->maxResults = 'itaque';
    $request->nextToken = 'consequatur';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = ListDatasetImportJobsXAmzTargetEnum::AMAZON_FORECAST_LIST_DATASET_IMPORT_JOBS;

    $response = $sdk->sdk->listDatasetImportJobs($request);

    if ($response->listDatasetImportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasets

Returns a list of datasets created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties, use the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDatasetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasetsRequest();
    $request->listDatasetsRequest = new ListDatasetsRequest();
    $request->listDatasetsRequest->maxResults = 181631;
    $request->listDatasetsRequest->nextToken = 'quae';
    $request->maxResults = 'laudantium';
    $request->nextToken = 'odio';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = ListDatasetsXAmzTargetEnum::AMAZON_FORECAST_LIST_DATASETS;

    $response = $sdk->sdk->listDatasets($request);

    if ($response->listDatasetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExplainabilities

<p>Returns a list of Explainability resources created using the <a>CreateExplainability</a> operation. This operation returns a summary for each Explainability. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability resource, use the ARN with the <a>DescribeExplainability</a> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExplainabilitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListExplainabilitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionStringEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListExplainabilitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExplainabilitiesRequest();
    $request->listExplainabilitiesRequest = new ListExplainabilitiesRequest();
    $request->listExplainabilitiesRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->listExplainabilitiesRequest->maxResults = 455169;
    $request->listExplainabilitiesRequest->nextToken = 'consectetur';
    $request->maxResults = 'vero';
    $request->nextToken = 'tenetur';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = ListExplainabilitiesXAmzTargetEnum::AMAZON_FORECAST_LIST_EXPLAINABILITIES;

    $response = $sdk->sdk->listExplainabilities($request);

    if ($response->listExplainabilitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExplainabilityExports

<p>Returns a list of Explainability exports created using the <a>CreateExplainabilityExport</a> operation. This operation returns a summary for each Explainability export. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability export, use the ARN with the <a>DescribeExplainability</a> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExplainabilityExportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListExplainabilityExportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionStringEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListExplainabilityExportsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExplainabilityExportsRequest();
    $request->listExplainabilityExportsRequest = new ListExplainabilityExportsRequest();
    $request->listExplainabilityExportsRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->listExplainabilityExportsRequest->maxResults = 498140;
    $request->listExplainabilityExportsRequest->nextToken = 'dolore';
    $request->maxResults = 'quibusdam';
    $request->nextToken = 'illum';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = ListExplainabilityExportsXAmzTargetEnum::AMAZON_FORECAST_LIST_EXPLAINABILITY_EXPORTS;

    $response = $sdk->sdk->listExplainabilityExports($request);

    if ($response->listExplainabilityExportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listForecastExportJobs

Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a> operation. You can filter the list using an array of <a>Filter</a> objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListForecastExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListForecastExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionStringEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListForecastExportJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListForecastExportJobsRequest();
    $request->listForecastExportJobsRequest = new ListForecastExportJobsRequest();
    $request->listForecastExportJobsRequest->filters = [
        new Filter(),
    ];
    $request->listForecastExportJobsRequest->maxResults = 780427;
    $request->listForecastExportJobsRequest->nextToken = 'maiores';
    $request->maxResults = 'doloribus';
    $request->nextToken = 'iusto';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = ListForecastExportJobsXAmzTargetEnum::AMAZON_FORECAST_LIST_FORECAST_EXPORT_JOBS;

    $response = $sdk->sdk->listForecastExportJobs($request);

    if ($response->listForecastExportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listForecasts

Returns a list of forecasts created using the <a>CreateForecast</a> operation. For each forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the <a>DescribeForecast</a> operation. You can filter the list using an array of <a>Filter</a> objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListForecastsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListForecastsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionStringEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListForecastsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListForecastsRequest();
    $request->listForecastsRequest = new ListForecastsRequest();
    $request->listForecastsRequest->filters = [
        new Filter(),
    ];
    $request->listForecastsRequest->maxResults = 428224;
    $request->listForecastsRequest->nextToken = 'possimus';
    $request->maxResults = 'magnam';
    $request->nextToken = 'ratione';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = ListForecastsXAmzTargetEnum::AMAZON_FORECAST_LIST_FORECASTS;

    $response = $sdk->sdk->listForecasts($request);

    if ($response->listForecastsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMonitorEvaluations

<p>Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource during different windows of time.</p> <p>For information about monitoring see <a>predictor-monitoring</a>. For more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitorEvaluationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMonitorEvaluationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionStringEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitorEvaluationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMonitorEvaluationsRequest();
    $request->listMonitorEvaluationsRequest = new ListMonitorEvaluationsRequest();
    $request->listMonitorEvaluationsRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->listMonitorEvaluationsRequest->maxResults = 569211;
    $request->listMonitorEvaluationsRequest->monitorArn = 'voluptatibus';
    $request->listMonitorEvaluationsRequest->nextToken = 'nostrum';
    $request->maxResults = 'sapiente';
    $request->nextToken = 'quisquam';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'inventore';
    $request->xAmzTarget = ListMonitorEvaluationsXAmzTargetEnum::AMAZON_FORECAST_LIST_MONITOR_EVALUATIONS;

    $response = $sdk->sdk->listMonitorEvaluations($request);

    if ($response->listMonitorEvaluationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMonitors

Returns a list of monitors created with the <a>CreateMonitor</a> operation and <a>CreateAutoPredictor</a> operation. For each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the <a>DescribeMonitor</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMonitorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionStringEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMonitorsRequest();
    $request->listMonitorsRequest = new ListMonitorsRequest();
    $request->listMonitorsRequest->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->listMonitorsRequest->maxResults = 407241;
    $request->listMonitorsRequest->nextToken = 'quo';
    $request->maxResults = 'consectetur';
    $request->nextToken = 'recusandae';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = ListMonitorsXAmzTargetEnum::AMAZON_FORECAST_LIST_MONITORS;

    $response = $sdk->sdk->listMonitors($request);

    if ($response->listMonitorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPredictorBacktestExportJobs

<p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a summary for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular backtest export job, use the ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPredictorBacktestExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPredictorBacktestExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionStringEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPredictorBacktestExportJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPredictorBacktestExportJobsRequest();
    $request->listPredictorBacktestExportJobsRequest = new ListPredictorBacktestExportJobsRequest();
    $request->listPredictorBacktestExportJobsRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->listPredictorBacktestExportJobsRequest->maxResults = 770581;
    $request->listPredictorBacktestExportJobsRequest->nextToken = 'aliquam';
    $request->maxResults = 'fugit';
    $request->nextToken = 'accusamus';
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = ListPredictorBacktestExportJobsXAmzTargetEnum::AMAZON_FORECAST_LIST_PREDICTOR_BACKTEST_EXPORT_JOBS;

    $response = $sdk->sdk->listPredictorBacktestExportJobs($request);

    if ($response->listPredictorBacktestExportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPredictors

<p>Returns a list of predictors created using the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). </p> <p>You can retrieve the complete set of properties by using the ARN with the <a>DescribeAutoPredictor</a> and <a>DescribePredictor</a> operations. You can filter the list using an array of <a>Filter</a> objects.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPredictorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPredictorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionStringEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPredictorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPredictorsRequest();
    $request->listPredictorsRequest = new ListPredictorsRequest();
    $request->listPredictorsRequest->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->listPredictorsRequest->maxResults = 420539;
    $request->listPredictorsRequest->nextToken = 'nobis';
    $request->maxResults = 'quas';
    $request->nextToken = 'assumenda';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = ListPredictorsXAmzTargetEnum::AMAZON_FORECAST_LIST_PREDICTORS;

    $response = $sdk->sdk->listPredictors($request);

    if ($response->listPredictorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags for an Amazon Forecast resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceArn = 'provident';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AMAZON_FORECAST_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWhatIfAnalyses

Returns a list of what-if analyses created using the <a>CreateWhatIfAnalysis</a> operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the <a>DescribeWhatIfAnalysis</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWhatIfAnalysesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWhatIfAnalysesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionStringEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListWhatIfAnalysesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWhatIfAnalysesRequest();
    $request->listWhatIfAnalysesRequest = new ListWhatIfAnalysesRequest();
    $request->listWhatIfAnalysesRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->listWhatIfAnalysesRequest->maxResults = 683282;
    $request->listWhatIfAnalysesRequest->nextToken = 'reprehenderit';
    $request->maxResults = 'quidem';
    $request->nextToken = 'fugiat';
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = ListWhatIfAnalysesXAmzTargetEnum::AMAZON_FORECAST_LIST_WHAT_IF_ANALYSES;

    $response = $sdk->sdk->listWhatIfAnalyses($request);

    if ($response->listWhatIfAnalysesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWhatIfForecastExports

Returns a list of what-if forecast exports created using the <a>CreateWhatIfForecastExport</a> operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the <a>DescribeWhatIfForecastExport</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWhatIfForecastExportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWhatIfForecastExportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionStringEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListWhatIfForecastExportsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWhatIfForecastExportsRequest();
    $request->listWhatIfForecastExportsRequest = new ListWhatIfForecastExportsRequest();
    $request->listWhatIfForecastExportsRequest->filters = [
        new Filter(),
    ];
    $request->listWhatIfForecastExportsRequest->maxResults = 56848;
    $request->listWhatIfForecastExportsRequest->nextToken = 'id';
    $request->maxResults = 'quidem';
    $request->nextToken = 'neque';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = ListWhatIfForecastExportsXAmzTargetEnum::AMAZON_FORECAST_LIST_WHAT_IF_FORECAST_EXPORTS;

    $response = $sdk->sdk->listWhatIfForecastExports($request);

    if ($response->listWhatIfForecastExportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWhatIfForecasts

Returns a list of what-if forecasts created using the <a>CreateWhatIfForecast</a> operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the <a>DescribeWhatIfForecast</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWhatIfForecastsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWhatIfForecastsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterConditionStringEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListWhatIfForecastsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWhatIfForecastsRequest();
    $request->listWhatIfForecastsRequest = new ListWhatIfForecastsRequest();
    $request->listWhatIfForecastsRequest->filters = [
        new Filter(),
    ];
    $request->listWhatIfForecastsRequest->maxResults = 587600;
    $request->listWhatIfForecastsRequest->nextToken = 'consequatur';
    $request->maxResults = 'tempora';
    $request->nextToken = 'debitis';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->xAmzTarget = ListWhatIfForecastsXAmzTargetEnum::AMAZON_FORECAST_LIST_WHAT_IF_FORECASTS;

    $response = $sdk->sdk->listWhatIfForecasts($request);

    if ($response->listWhatIfForecastsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resumeResource

Resumes a stopped monitor resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResumeResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResumeResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResumeResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResumeResourceRequest();
    $request->resumeResourceRequest = new ResumeResourceRequest();
    $request->resumeResourceRequest->resourceArn = 'distinctio';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = ResumeResourceXAmzTargetEnum::AMAZON_FORECAST_RESUME_RESOURCE;

    $response = $sdk->sdk->resumeResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopResource

<p>Stops a resource.</p> <p>The resource undergoes the following states: <code>CREATE_STOPPING</code> and <code>CREATE_STOPPED</code>. You cannot resume a resource once it has been stopped.</p> <p>This operation can be applied to the following resources (and their corresponding child resources):</p> <ul> <li> <p>Dataset Import Job</p> </li> <li> <p>Predictor Job</p> </li> <li> <p>Forecast Job</p> </li> <li> <p>Forecast Export Job</p> </li> <li> <p>Predictor Backtest Export Job</p> </li> <li> <p>Explainability Job</p> </li> <li> <p>Explainability Export Job</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopResourceRequest();
    $request->stopResourceRequest = new StopResourceRequest();
    $request->stopResourceRequest->resourceArn = 'odio';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = StopResourceXAmzTargetEnum::AMAZON_FORECAST_STOP_RESOURCE;

    $response = $sdk->sdk->stopResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'porro';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AMAZON_FORECAST_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deletes the specified tags from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'incidunt';
    $request->untagResourceRequest->tagKeys = [
        'explicabo',
        'minima',
        'nisi',
    ];
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AMAZON_FORECAST_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDatasetGroup

<p>Replaces the datasets in a dataset group with the specified datasets.</p> <note> <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation to get the status.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDatasetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDatasetGroupRequest();
    $request->updateDatasetGroupRequest = new UpdateDatasetGroupRequest();
    $request->updateDatasetGroupRequest->datasetArns = [
        'et',
        'esse',
        'eveniet',
    ];
    $request->updateDatasetGroupRequest->datasetGroupArn = 'accusamus';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = UpdateDatasetGroupXAmzTargetEnum::AMAZON_FORECAST_UPDATE_DATASET_GROUP;

    $response = $sdk->sdk->updateDatasetGroup($request);

    if ($response->updateDatasetGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
