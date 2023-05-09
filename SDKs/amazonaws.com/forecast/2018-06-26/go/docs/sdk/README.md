# SDK

## Overview

Provides APIs for creating and managing Amazon Forecast resources.

Amazon Web Services documentation
<https://docs.aws.amazon.com/forecast/>
### Available Operations

* [CreateAutoPredictor](#createautopredictor) - <p>Creates an Amazon Forecast predictor.</p> <p>Amazon Forecast creates predictors with AutoPredictor, which involves applying the optimal combination of algorithms to each time series in your datasets. You can use <a>CreateAutoPredictor</a> to create new predictors or upgrade/retrain existing predictors.</p> <p> <b>Creating new predictors</b> </p> <p>The following parameters are required when creating a new predictor:</p> <ul> <li> <p> <code>PredictorName</code> - A unique name for the predictor.</p> </li> <li> <p> <code>DatasetGroupArn</code> - The ARN of the dataset group used to train the predictor.</p> </li> <li> <p> <code>ForecastFrequency</code> - The granularity of your forecasts (hourly, daily, weekly, etc).</p> </li> <li> <p> <code>ForecastHorizon</code> - The number of time-steps that the model predicts. The forecast horizon is also called the prediction length.</p> </li> </ul> <p>When creating a new predictor, do not specify a value for <code>ReferencePredictorArn</code>.</p> <p> <b>Upgrading and retraining predictors</b> </p> <p>The following parameters are required when retraining or upgrading a predictor:</p> <ul> <li> <p> <code>PredictorName</code> - A unique name for the predictor.</p> </li> <li> <p> <code>ReferencePredictorArn</code> - The ARN of the predictor to retrain or upgrade.</p> </li> </ul> <p>When upgrading or retraining a predictor, only specify values for the <code>ReferencePredictorArn</code> and <code>PredictorName</code>. </p>
* [CreateDataset](#createdataset) - <p>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:</p> <ul> <li> <p> <i> <code>DataFrequency</code> </i> - How frequently your historical time-series data is collected.</p> </li> <li> <p> <i> <code>Domain</code> </i> and <i> <code>DatasetType</code> </i> - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields.</p> </li> <li> <p> <i> <code>Schema</code> </i> - A schema specifies the fields in the dataset, including the field name and data type.</p> </li> </ul> <p>After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Importing datasets</a>.</p> <p>To get a list of all your datasets, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation.</p> <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub repository</a>.</p> <note> <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import training data. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation to get the status.</p> </note>
* [CreateDatasetGroup](#createdatasetgroup) - <p>Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation.</p> <p>After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Dataset groups</a>.</p> <p>To get a list of all your datasets groups, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation.</p> <note> <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> </note>
* [CreateDatasetImportJob](#createdatasetimportjob) - <p>Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to.</p> <p>You must specify a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DataSource.html">DataSource</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an internal Amazon Web Services system. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-iam-roles.html">Set up permissions</a>.</p> <p>The training data must be in CSV or Parquet format. The delimiter must be a comma (,).</p> <p>You can specify the path to a specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files.</p> <p>Because dataset imports are not aggregated, your most recent dataset import is the one that is used when training a predictor or generating a forecast. Make sure that your most recent dataset import contains all of the data you want to model off of, and not just the new data collected since the previous import.</p> <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation.</p>
* [CreateExplainability](#createexplainability) - <note> <p>Explainability is only available for Forecasts and Predictors generated from an AutoPredictor (<a>CreateAutoPredictor</a>)</p> </note> <p>Creates an Amazon Forecast Explainability.</p> <p>Explainability helps you better understand how the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative impact of each attribute and determine whether they increase or decrease forecast values.</p> <p>To enable Forecast Explainability, your predictor must include at least one of the following: related time series, item metadata, or additional datasets like Holidays and the Weather Index.</p> <p>CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a Forecast ARN.</p> <p> <b>CreateExplainability with a Predictor ARN</b> </p> <note> <p>You can only have one Explainability resource per predictor. If you already enabled <code>ExplainPredictor</code> in <a>CreateAutoPredictor</a>, that predictor already has an Explainability resource.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the predictor.</p> </li> <li> <p> <code>TimePointGranularity</code> - Must be set to “ALL”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Must be set to “ALL”.</p> </li> </ul> <p>Do not specify a value for the following parameters:</p> <ul> <li> <p> <code>DataSource</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>Schema</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>StartDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>EndDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> </ul> <p> <b>CreateExplainability with a Forecast ARN</b> </p> <note> <p>You can specify a maximum of 50 time series and 500 time points.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the forecast.</p> </li> <li> <p> <code>TimePointGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> </ul> <p>If you set TimeSeriesGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>DataSource</code> - The S3 location of the CSV file specifying your time series.</p> </li> <li> <p> <code>Schema</code> - The Schema defines the attributes and attribute types listed in the Data Source.</p> </li> </ul> <p>If you set TimePointGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>StartDateTime</code> - The first timestamp in the range of time points.</p> </li> <li> <p> <code>EndDateTime</code> - The last timestamp in the range of time points.</p> </li> </ul>
* [CreateExplainabilityExport](#createexplainabilityexport) - <p>Exports an Explainability resource created by the <a>CreateExplainability</a> operation. Exported files are exported to an Amazon Simple Storage Service (Amazon S3) bucket.</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribeExplainabilityExport</a> operation.</p> </note>
* [CreateForecast](#createforecast) - <p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p> <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which you specify in the <a>CreatePredictor</a> request. When you query a forecast, you can request a specific date range within the forecast.</p> <p>To get a list of all your forecasts, use the <a>ListForecasts</a> operation.</p> <note> <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was used to create the predictor.</p> </note> <p>For more information, see <a>howitworks-forecast</a>.</p> <note> <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query or export the forecast. Use the <a>DescribeForecast</a> operation to get the status.</p> </note> <p>By default, a forecast includes predictions for every item (<code>item_id</code>) in the dataset group that was used to train the predictor. However, you can use the <code>TimeSeriesSelector</code> object to generate a forecast on a subset of time series. Forecast creation is skipped for any time series that you specify that are not in the input dataset. The forecast export file will not contain these time series or their forecasted values.</p>
* [CreateForecastExportJob](#createforecastexportjob) - <p>Exports a forecast created by the <a>CreateForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p>&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</p> <p>where the &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your forecast export jobs, use the <a>ListForecastExportJobs</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p> </note>
* [CreateMonitor](#createmonitor) - Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see how your predictor's performance changes over time. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring.html">Predictor Monitoring</a>. 
* [CreatePredictor](#createpredictor) - <note> <p> This operation creates a legacy predictor that does not include all the predictor functionalities provided by Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use <a>CreateAutoPredictor</a>.</p> </note> <p>Creates an Amazon Forecast predictor.</p> <p>In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters.</p> <p>Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the <a>CreateForecast</a> operation.</p> <p> To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation. </p> <p>You can specify a featurization configuration to fill and aggregate the data fields in the <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more information, see <a>FeaturizationConfig</a>.</p> <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the <code>DataFrequency</code> specified when the dataset was created matches the <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p> <p>By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9 (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor by setting the <code>ForecastTypes</code>. </p> <p> <b>AutoML</b> </p> <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The <code>objective function</code> is defined as the mean of the weighted losses over the forecast types. By default, these are the p10, p50, and p90 quantile losses. For more information, see <a>EvaluationResult</a>.</p> <p>When AutoML is enabled, the following properties are disallowed:</p> <ul> <li> <p> <code>AlgorithmArn</code> </p> </li> <li> <p> <code>HPOConfig</code> </p> </li> <li> <p> <code>PerformHPO</code> </p> </li> <li> <p> <code>TrainingParameters</code> </p> </li> </ul> <p>To get a list of all of your predictors, use the <a>ListPredictors</a> operation.</p> <note> <p>Before you can use the predictor to create a forecast, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>
* [CreatePredictorBacktestExportJob](#createpredictorbacktestexportjob) - <p>Exports backtest forecasts and accuracy metrics generated by the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. Two folders containing CSV or Parquet files are exported to your specified S3 bucket.</p> <p> The export file names will match the following conventions:</p> <p> <code>&lt;ExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;.csv</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDate format (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribePredictorBacktestExportJob</a> operation.</p> </note>
* [CreateWhatIfAnalysis](#createwhatifanalysis) - <p>What-if analysis is a scenario modeling technique where you make a hypothetical change to a time series and compare the forecasts generated by these changes against the baseline, unchanged time series. It is important to remember that the purpose of a what-if analysis is to understand how a forecast can change given different modifications to the baseline time series.</p> <p>For example, imagine you are a clothing retailer who is considering an end of season sale to clear space for new styles. After creating a baseline forecast, you can use a what-if analysis to investigate how different sales tactics might affect your goals.</p> <p>You could create a scenario where everything is given a 25% markdown, and another where everything is given a fixed dollar markdown. You could create a scenario where the sale lasts for one week and another where the sale lasts for one month. With a what-if analysis, you can compare many different scenarios against each other.</p> <p>Note that a what-if analysis is meant to display what the forecasting model has learned and how it will behave in the scenarios that you are evaluating. Do not blindly use the results of the what-if analysis to make business decisions. For instance, forecasts might not be accurate for novel scenarios where there is no reference available to determine whether a forecast is good.</p> <p>The <a>TimeSeriesSelector</a> object defines the items that you want in the what-if analysis.</p>
* [CreateWhatIfForecast](#createwhatifforecast) - A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset. 
* [CreateWhatIfForecastExport](#createwhatifforecastexport) - <p>Exports a forecast created by the <a>CreateWhatIfForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p> <code>≈&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your what-if forecast export jobs, use the <a>ListWhatIfForecastExports</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation.</p> </note>
* [DeleteDataset](#deletedataset) - <p>Deletes an Amazon Forecast dataset that was created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. You can only delete datasets that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.</p> <note> <p>Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update the dataset group, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation, omitting the deleted dataset's ARN.</p> </note>
* [DeleteDatasetGroup](#deletedatasetgroup) - <p>Deletes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. You can only delete dataset groups that have a status of <code>ACTIVE</code>, <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> <p>This operation deletes only the dataset group, not the datasets in the group.</p>
* [DeleteDatasetImportJob](#deletedatasetimportjob) - Deletes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation.
* [DeleteExplainability](#deleteexplainability) - <p>Deletes an Explainability resource.</p> <p>You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeExplainability</a> operation.</p>
* [DeleteExplainabilityExport](#deleteexplainabilityexport) - Deletes an Explainability export.
* [DeleteForecast](#deleteforecast) - <p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecast</a> operation.</p> <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you can no longer query the forecast.</p>
* [DeleteForecastExportJob](#deleteforecastexportjob) - Deletes a forecast export job created using the <a>CreateForecastExportJob</a> operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.
* [DeleteMonitor](#deletemonitor) - Deletes a monitor resource. You can only delete a monitor resource with a status of <code>ACTIVE</code>, <code>ACTIVE_STOPPED</code>, <code>CREATE_FAILED</code>, or <code>CREATE_STOPPED</code>.
* [DeletePredictor](#deletepredictor) - Deletes a predictor created using the <a>DescribePredictor</a> or <a>CreatePredictor</a> operations. You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribePredictor</a> operation.
* [DeletePredictorBacktestExportJob](#deletepredictorbacktestexportjob) - Deletes a predictor backtest export job.
* [DeleteResourceTree](#deleteresourcetree) - <p>Deletes an entire resource tree. This operation will delete the parent resource and its child resources.</p> <p>Child resources are resources that were created from another resource. For example, when a forecast is generated from a predictor, the forecast is the child resource and the predictor is the parent resource.</p> <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p> <ul> <li> <p> <b>Dataset</b>: dataset import jobs</p> </li> <li> <p> <b>Dataset Group</b>: predictors, predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Predictor</b>: predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Forecast</b>: forecast export jobs</p> </li> </ul> <note> <p> <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not delete datasets or exported files stored in Amazon S3. </p> </note>
* [DeleteWhatIfAnalysis](#deletewhatifanalysis) - <p>Deletes a what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation. You can delete only what-if analyses that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfAnalysis</a> operation. </p> <p>You can't delete a what-if analysis while any of its forecasts are being exported.</p>
* [DeleteWhatIfForecast](#deletewhatifforecast) - <p>Deletes a what-if forecast created using the <a>CreateWhatIfForecast</a> operation. You can delete only what-if forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecast</a> operation. </p> <p>You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.</p>
* [DeleteWhatIfForecastExport](#deletewhatifforecastexport) - Deletes a what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation. You can delete only what-if forecast exports that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation. 
* [DescribeAutoPredictor](#describeautopredictor) - Describes a predictor created using the CreateAutoPredictor operation.
* [DescribeDataset](#describedataset) - <p>Describes an Amazon Forecast dataset created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation.</p> <p>In addition to listing the parameters specified in the <code>CreateDataset</code> request, this operation includes the following dataset properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
* [DescribeDatasetGroup](#describedatasetgroup) - <p>Describes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>DatasetArns</code> - The datasets belonging to the group.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
* [DescribeDatasetImportJob](#describedatasetimportjob) - <p>Describes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetImportJob</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>DataSize</code> </p> </li> <li> <p> <code>FieldStatistics</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
* [DescribeExplainability](#describeexplainability) - Describes an Explainability resource created using the <a>CreateExplainability</a> operation.
* [DescribeExplainabilityExport](#describeexplainabilityexport) - Describes an Explainability export created using the <a>CreateExplainabilityExport</a> operation.
* [DescribeForecast](#describeforecast) - <p>Describes a forecast created using the <a>CreateForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetGroupArn</code> - The dataset group that provided the training data.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
* [DescribeForecastExportJob](#describeforecastexportjob) - <p>Describes a forecast export job created using the <a>CreateForecastExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreateForecastExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
* [DescribeMonitor](#describemonitor) - <p>Describes a monitor resource. In addition to listing the properties provided in the <a>CreateMonitor</a> request, this operation lists the following properties:</p> <ul> <li> <p> <code>Baseline</code> </p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastEvaluationTime</code> </p> </li> <li> <p> <code>LastEvaluationState</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
* [DescribePredictor](#describepredictor) - <note> <p> This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a legacy predictor, use <a>DescribeAutoPredictor</a>.</p> </note> <p>Describes a predictor created using the <a>CreatePredictor</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreatePredictor</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetImportJobArns</code> - The dataset import jobs used to import training data.</p> </li> <li> <p> <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were evaluated.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
* [DescribePredictorBacktestExportJob](#describepredictorbacktestexportjob) - <p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreatePredictorBacktestExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> (if an error occurred)</p> </li> </ul>
* [DescribeWhatIfAnalysis](#describewhatifanalysis) - <p>Describes the what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfAnalysis</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
* [DescribeWhatIfForecast](#describewhatifforecast) - <p>Describes the what-if forecast created using the <a>CreateWhatIfForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
* [DescribeWhatIfForecastExport](#describewhatifforecastexport) - <p>Describes the what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecastExport</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
* [GetAccuracyMetrics](#getaccuracymetrics) - <p>Provides metrics on the accuracy of the models that were trained by the <a>CreatePredictor</a> operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Predictor Metrics</a>.</p> <p>This operation generates metrics for each backtest window that was evaluated. The number of backtest windows (<code>NumberOfBacktestWindows</code>) is specified using the <a>EvaluationParameters</a> object, which is optionally included in the <code>CreatePredictor</code> request. If <code>NumberOfBacktestWindows</code> isn't specified, the number defaults to one.</p> <p>The parameters of the <code>filling</code> method determine which items contribute to the metrics. If you want all items to contribute, specify <code>zero</code>. If you want only those items that have complete data in the range being evaluated to contribute, specify <code>nan</code>. For more information, see <a>FeaturizationMethod</a>.</p> <note> <p>Before you can get accuracy metrics, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>
* [ListDatasetGroups](#listdatasetgroups) - Returns a list of dataset groups created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. For each dataset group, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.
* [ListDatasetImportJobs](#listdatasetimportjobs) - Returns a list of dataset import jobs created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation. You can filter the list by providing an array of <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Filter.html">Filter</a> objects.
* [ListDatasets](#listdatasets) - Returns a list of datasets created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties, use the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.
* [ListExplainabilities](#listexplainabilities) - <p>Returns a list of Explainability resources created using the <a>CreateExplainability</a> operation. This operation returns a summary for each Explainability. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability resource, use the ARN with the <a>DescribeExplainability</a> operation.</p>
* [ListExplainabilityExports](#listexplainabilityexports) - <p>Returns a list of Explainability exports created using the <a>CreateExplainabilityExport</a> operation. This operation returns a summary for each Explainability export. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability export, use the ARN with the <a>DescribeExplainability</a> operation.</p>
* [ListForecastExportJobs](#listforecastexportjobs) - Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a> operation. You can filter the list using an array of <a>Filter</a> objects.
* [ListForecasts](#listforecasts) - Returns a list of forecasts created using the <a>CreateForecast</a> operation. For each forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the <a>DescribeForecast</a> operation. You can filter the list using an array of <a>Filter</a> objects.
* [ListMonitorEvaluations](#listmonitorevaluations) - <p>Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource during different windows of time.</p> <p>For information about monitoring see <a>predictor-monitoring</a>. For more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>
* [ListMonitors](#listmonitors) - Returns a list of monitors created with the <a>CreateMonitor</a> operation and <a>CreateAutoPredictor</a> operation. For each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the <a>DescribeMonitor</a> operation.
* [ListPredictorBacktestExportJobs](#listpredictorbacktestexportjobs) - <p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a summary for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular backtest export job, use the ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>
* [ListPredictors](#listpredictors) - <p>Returns a list of predictors created using the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). </p> <p>You can retrieve the complete set of properties by using the ARN with the <a>DescribeAutoPredictor</a> and <a>DescribePredictor</a> operations. You can filter the list using an array of <a>Filter</a> objects.</p>
* [ListTagsForResource](#listtagsforresource) - Lists the tags for an Amazon Forecast resource.
* [ListWhatIfAnalyses](#listwhatifanalyses) - Returns a list of what-if analyses created using the <a>CreateWhatIfAnalysis</a> operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the <a>DescribeWhatIfAnalysis</a> operation.
* [ListWhatIfForecastExports](#listwhatifforecastexports) - Returns a list of what-if forecast exports created using the <a>CreateWhatIfForecastExport</a> operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the <a>DescribeWhatIfForecastExport</a> operation.
* [ListWhatIfForecasts](#listwhatifforecasts) - Returns a list of what-if forecasts created using the <a>CreateWhatIfForecast</a> operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the <a>DescribeWhatIfForecast</a> operation.
* [ResumeResource](#resumeresource) - Resumes a stopped monitor resource.
* [StopResource](#stopresource) - <p>Stops a resource.</p> <p>The resource undergoes the following states: <code>CREATE_STOPPING</code> and <code>CREATE_STOPPED</code>. You cannot resume a resource once it has been stopped.</p> <p>This operation can be applied to the following resources (and their corresponding child resources):</p> <ul> <li> <p>Dataset Import Job</p> </li> <li> <p>Predictor Job</p> </li> <li> <p>Forecast Job</p> </li> <li> <p>Forecast Export Job</p> </li> <li> <p>Predictor Backtest Export Job</p> </li> <li> <p>Explainability Job</p> </li> <li> <p>Explainability Export Job</p> </li> </ul>
* [TagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
* [UntagResource](#untagresource) - Deletes the specified tags from a resource.
* [UpdateDatasetGroup](#updatedatasetgroup) - <p>Replaces the datasets in a dataset group with the specified datasets.</p> <note> <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation to get the status.</p> </note>

## CreateAutoPredictor

<p>Creates an Amazon Forecast predictor.</p> <p>Amazon Forecast creates predictors with AutoPredictor, which involves applying the optimal combination of algorithms to each time series in your datasets. You can use <a>CreateAutoPredictor</a> to create new predictors or upgrade/retrain existing predictors.</p> <p> <b>Creating new predictors</b> </p> <p>The following parameters are required when creating a new predictor:</p> <ul> <li> <p> <code>PredictorName</code> - A unique name for the predictor.</p> </li> <li> <p> <code>DatasetGroupArn</code> - The ARN of the dataset group used to train the predictor.</p> </li> <li> <p> <code>ForecastFrequency</code> - The granularity of your forecasts (hourly, daily, weekly, etc).</p> </li> <li> <p> <code>ForecastHorizon</code> - The number of time-steps that the model predicts. The forecast horizon is also called the prediction length.</p> </li> </ul> <p>When creating a new predictor, do not specify a value for <code>ReferencePredictorArn</code>.</p> <p> <b>Upgrading and retraining predictors</b> </p> <p>The following parameters are required when retraining or upgrading a predictor:</p> <ul> <li> <p> <code>PredictorName</code> - A unique name for the predictor.</p> </li> <li> <p> <code>ReferencePredictorArn</code> - The ARN of the predictor to retrain or upgrade.</p> </li> </ul> <p>When upgrading or retraining a predictor, only specify values for the <code>ReferencePredictorArn</code> and <code>PredictorName</code>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAutoPredictor(ctx, operations.CreateAutoPredictorRequest{
        CreateAutoPredictorRequest: shared.CreateAutoPredictorRequest{
            DataConfig: &shared.DataConfig{
                AdditionalDatasets: []shared.AdditionalDataset{
                    shared.AdditionalDataset{
                        Configuration: map[string][]string{
                            "iure": []string{
                                "doloribus",
                                "sapiente",
                                "architecto",
                            },
                        },
                        Name: "Mike Nicolas",
                    },
                    shared.AdditionalDataset{
                        Configuration: map[string][]string{
                            "occaecati": []string{
                                "commodi",
                                "quam",
                            },
                            "molestiae": []string{
                                "error",
                            },
                            "quia": []string{
                                "vitae",
                                "laborum",
                            },
                        },
                        Name: "Bill Conn",
                    },
                    shared.AdditionalDataset{
                        Configuration: map[string][]string{
                            "ipsam": []string{
                                "possimus",
                                "aut",
                                "quasi",
                            },
                            "error": []string{
                                "laborum",
                                "quasi",
                                "reiciendis",
                                "voluptatibus",
                            },
                            "vero": []string{
                                "praesentium",
                                "voluptatibus",
                            },
                            "ipsa": []string{
                                "voluptate",
                                "cum",
                                "perferendis",
                            },
                        },
                        Name: "Bessie Grady II",
                    },
                },
                AttributeConfigs: []shared.AttributeConfig{
                    shared.AttributeConfig{
                        AttributeName: "iusto",
                        Transformations: map[string]string{
                            "harum": "enim",
                        },
                    },
                    shared.AttributeConfig{
                        AttributeName: "accusamus",
                        Transformations: map[string]string{
                            "repudiandae": "quae",
                            "ipsum": "quidem",
                        },
                    },
                },
                DatasetGroupArn: "molestias",
            },
            EncryptionConfig: &shared.EncryptionConfig{
                KMSKeyArn: "excepturi",
                RoleArn: "pariatur",
            },
            ExplainPredictor: sdk.Bool(false),
            ForecastDimensions: []string{
                "praesentium",
                "rem",
            },
            ForecastFrequency: sdk.String("voluptates"),
            ForecastHorizon: sdk.Int64(93940),
            ForecastTypes: []string{
                "sint",
                "veritatis",
                "itaque",
                "incidunt",
            },
            MonitorConfig: &shared.MonitorConfig{
                MonitorName: "enim",
            },
            OptimizationMetric: shared.OptimizationMetricEnumWape.ToPointer(),
            PredictorName: "est",
            ReferencePredictorArn: sdk.String("quibusdam"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "deserunt",
                    Value: "distinctio",
                },
            },
            TimeAlignmentBoundary: &shared.TimeAlignmentBoundary{
                DayOfMonth: sdk.Int64(841386),
                DayOfWeek: shared.DayOfWeekEnumWednesday.ToPointer(),
                Hour: sdk.Int64(264730),
                Month: shared.MonthEnumMarch.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.CreateAutoPredictorXAmzTargetEnumAmazonForecastCreateAutoPredictor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAutoPredictorResponse != nil {
        // handle response
    }
}
```

## CreateDataset

<p>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:</p> <ul> <li> <p> <i> <code>DataFrequency</code> </i> - How frequently your historical time-series data is collected.</p> </li> <li> <p> <i> <code>Domain</code> </i> and <i> <code>DatasetType</code> </i> - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields.</p> </li> <li> <p> <i> <code>Schema</code> </i> - A schema specifies the fields in the dataset, including the field name and data type.</p> </li> </ul> <p>After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Importing datasets</a>.</p> <p>To get a list of all your datasets, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation.</p> <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub repository</a>.</p> <note> <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import training data. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation to get the status.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDataset(ctx, operations.CreateDatasetRequest{
        CreateDatasetRequest: shared.CreateDatasetRequest{
            DataFrequency: sdk.String("alias"),
            DatasetName: "fugit",
            DatasetType: shared.DatasetTypeEnumItemMetadata,
            Domain: shared.DomainEnumEc2Capacity,
            EncryptionConfig: &shared.EncryptionConfig{
                KMSKeyArn: "tempora",
                RoleArn: "facilis",
            },
            Schema: shared.Schema{
                Attributes: []shared.SchemaAttribute{
                    shared.SchemaAttribute{
                        AttributeName: sdk.String("labore"),
                        AttributeType: shared.AttributeTypeEnumGeolocation.ToPointer(),
                    },
                    shared.SchemaAttribute{
                        AttributeName: sdk.String("eum"),
                        AttributeType: shared.AttributeTypeEnumInteger.ToPointer(),
                    },
                    shared.SchemaAttribute{
                        AttributeName: sdk.String("eligendi"),
                        AttributeType: shared.AttributeTypeEnumFloat.ToPointer(),
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "provident",
                    Value: "necessitatibus",
                },
                shared.Tag{
                    Key: "sint",
                    Value: "officia",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.CreateDatasetXAmzTargetEnumAmazonForecastCreateDataset,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatasetResponse != nil {
        // handle response
    }
}
```

## CreateDatasetGroup

<p>Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation.</p> <p>After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Dataset groups</a>.</p> <p>To get a list of all your datasets groups, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation.</p> <note> <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDatasetGroup(ctx, operations.CreateDatasetGroupRequest{
        CreateDatasetGroupRequest: shared.CreateDatasetGroupRequest{
            DatasetArns: []string{
                "rerum",
                "dicta",
                "magnam",
                "cumque",
            },
            DatasetGroupName: "facere",
            Domain: shared.DomainEnumInventoryPlanning,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "laborum",
                    Value: "accusamus",
                },
                shared.Tag{
                    Key: "non",
                    Value: "occaecati",
                },
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.CreateDatasetGroupXAmzTargetEnumAmazonForecastCreateDatasetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatasetGroupResponse != nil {
        // handle response
    }
}
```

## CreateDatasetImportJob

<p>Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to.</p> <p>You must specify a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DataSource.html">DataSource</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an internal Amazon Web Services system. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-iam-roles.html">Set up permissions</a>.</p> <p>The training data must be in CSV or Parquet format. The delimiter must be a comma (,).</p> <p>You can specify the path to a specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files.</p> <p>Because dataset imports are not aggregated, your most recent dataset import is the one that is used when training a predictor or generating a forecast. Make sure that your most recent dataset import contains all of the data you want to model off of, and not just the new data collected since the previous import.</p> <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDatasetImportJob(ctx, operations.CreateDatasetImportJobRequest{
        CreateDatasetImportJobRequest: shared.CreateDatasetImportJobRequest{
            DataSource: shared.DataSource{
                S3Config: shared.S3Config{
                    KMSKeyArn: sdk.String("blanditiis"),
                    Path: "deleniti",
                    RoleArn: "sapiente",
                },
            },
            DatasetArn: "amet",
            DatasetImportJobName: "deserunt",
            Format: sdk.String("nisi"),
            GeolocationFormat: sdk.String("vel"),
            ImportMode: shared.ImportModeEnumIncremental.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "molestiae",
                    Value: "perferendis",
                },
                shared.Tag{
                    Key: "nihil",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "distinctio",
                    Value: "id",
                },
            },
            TimeZone: sdk.String("labore"),
            TimestampFormat: sdk.String("labore"),
            UseGeolocationForTimeZone: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.CreateDatasetImportJobXAmzTargetEnumAmazonForecastCreateDatasetImportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatasetImportJobResponse != nil {
        // handle response
    }
}
```

## CreateExplainability

<note> <p>Explainability is only available for Forecasts and Predictors generated from an AutoPredictor (<a>CreateAutoPredictor</a>)</p> </note> <p>Creates an Amazon Forecast Explainability.</p> <p>Explainability helps you better understand how the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative impact of each attribute and determine whether they increase or decrease forecast values.</p> <p>To enable Forecast Explainability, your predictor must include at least one of the following: related time series, item metadata, or additional datasets like Holidays and the Weather Index.</p> <p>CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a Forecast ARN.</p> <p> <b>CreateExplainability with a Predictor ARN</b> </p> <note> <p>You can only have one Explainability resource per predictor. If you already enabled <code>ExplainPredictor</code> in <a>CreateAutoPredictor</a>, that predictor already has an Explainability resource.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the predictor.</p> </li> <li> <p> <code>TimePointGranularity</code> - Must be set to “ALL”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Must be set to “ALL”.</p> </li> </ul> <p>Do not specify a value for the following parameters:</p> <ul> <li> <p> <code>DataSource</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>Schema</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>StartDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>EndDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> </ul> <p> <b>CreateExplainability with a Forecast ARN</b> </p> <note> <p>You can specify a maximum of 50 time series and 500 time points.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the forecast.</p> </li> <li> <p> <code>TimePointGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> </ul> <p>If you set TimeSeriesGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>DataSource</code> - The S3 location of the CSV file specifying your time series.</p> </li> <li> <p> <code>Schema</code> - The Schema defines the attributes and attribute types listed in the Data Source.</p> </li> </ul> <p>If you set TimePointGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>StartDateTime</code> - The first timestamp in the range of time points.</p> </li> <li> <p> <code>EndDateTime</code> - The last timestamp in the range of time points.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateExplainability(ctx, operations.CreateExplainabilityRequest{
        CreateExplainabilityRequest: shared.CreateExplainabilityRequest{
            DataSource: &shared.DataSource{
                S3Config: shared.S3Config{
                    KMSKeyArn: sdk.String("magnam"),
                    Path: "et",
                    RoleArn: "excepturi",
                },
            },
            EnableVisualization: sdk.Bool(false),
            EndDateTime: sdk.String("ullam"),
            ExplainabilityConfig: shared.ExplainabilityConfig{
                TimePointGranularity: shared.TimePointGranularityEnumSpecific,
                TimeSeriesGranularity: shared.TimeSeriesGranularityEnumSpecific,
            },
            ExplainabilityName: "sint",
            ResourceArn: "accusantium",
            Schema: &shared.Schema{
                Attributes: []shared.SchemaAttribute{
                    shared.SchemaAttribute{
                        AttributeName: sdk.String("reiciendis"),
                        AttributeType: shared.AttributeTypeEnumTimestamp.ToPointer(),
                    },
                    shared.SchemaAttribute{
                        AttributeName: sdk.String("ad"),
                        AttributeType: shared.AttributeTypeEnumFloat.ToPointer(),
                    },
                    shared.SchemaAttribute{
                        AttributeName: sdk.String("dolor"),
                        AttributeType: shared.AttributeTypeEnumGeolocation.ToPointer(),
                    },
                },
            },
            StartDateTime: sdk.String("odit"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quasi",
                    Value: "iure",
                },
                shared.Tag{
                    Key: "doloribus",
                    Value: "debitis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.CreateExplainabilityXAmzTargetEnumAmazonForecastCreateExplainability,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateExplainabilityResponse != nil {
        // handle response
    }
}
```

## CreateExplainabilityExport

<p>Exports an Explainability resource created by the <a>CreateExplainability</a> operation. Exported files are exported to an Amazon Simple Storage Service (Amazon S3) bucket.</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribeExplainabilityExport</a> operation.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateExplainabilityExport(ctx, operations.CreateExplainabilityExportRequest{
        CreateExplainabilityExportRequest: shared.CreateExplainabilityExportRequest{
            Destination: shared.DataDestination{
                S3Config: shared.S3Config{
                    KMSKeyArn: sdk.String("repudiandae"),
                    Path: "ullam",
                    RoleArn: "expedita",
                },
            },
            ExplainabilityArn: "nihil",
            ExplainabilityExportName: "repellat",
            Format: sdk.String("quibusdam"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "saepe",
                    Value: "pariatur",
                },
            },
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.CreateExplainabilityExportXAmzTargetEnumAmazonForecastCreateExplainabilityExport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateExplainabilityExportResponse != nil {
        // handle response
    }
}
```

## CreateForecast

<p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p> <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which you specify in the <a>CreatePredictor</a> request. When you query a forecast, you can request a specific date range within the forecast.</p> <p>To get a list of all your forecasts, use the <a>ListForecasts</a> operation.</p> <note> <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was used to create the predictor.</p> </note> <p>For more information, see <a>howitworks-forecast</a>.</p> <note> <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query or export the forecast. Use the <a>DescribeForecast</a> operation to get the status.</p> </note> <p>By default, a forecast includes predictions for every item (<code>item_id</code>) in the dataset group that was used to train the predictor. However, you can use the <code>TimeSeriesSelector</code> object to generate a forecast on a subset of time series. Forecast creation is skipped for any time series that you specify that are not in the input dataset. The forecast export file will not contain these time series or their forecasted values.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateForecast(ctx, operations.CreateForecastRequest{
        CreateForecastRequest: shared.CreateForecastRequest{
            ForecastName: "illum",
            ForecastTypes: []string{
                "maxime",
                "ea",
                "excepturi",
                "odit",
            },
            PredictorArn: "ea",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ab",
                    Value: "maiores",
                },
            },
            TimeSeriesSelector: &shared.TimeSeriesSelector{
                TimeSeriesIdentifiers: &shared.TimeSeriesIdentifiers{
                    DataSource: &shared.DataSource{
                        S3Config: shared.S3Config{
                            KMSKeyArn: sdk.String("quidem"),
                            Path: "ipsam",
                            RoleArn: "voluptate",
                        },
                    },
                    Format: sdk.String("autem"),
                    Schema: &shared.Schema{
                        Attributes: []shared.SchemaAttribute{
                            shared.SchemaAttribute{
                                AttributeName: sdk.String("eaque"),
                                AttributeType: shared.AttributeTypeEnumGeolocation.ToPointer(),
                            },
                            shared.SchemaAttribute{
                                AttributeName: sdk.String("nemo"),
                                AttributeType: shared.AttributeTypeEnumGeolocation.ToPointer(),
                            },
                            shared.SchemaAttribute{
                                AttributeName: sdk.String("perferendis"),
                                AttributeType: shared.AttributeTypeEnumGeolocation.ToPointer(),
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.CreateForecastXAmzTargetEnumAmazonForecastCreateForecast,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateForecastResponse != nil {
        // handle response
    }
}
```

## CreateForecastExportJob

<p>Exports a forecast created by the <a>CreateForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p>&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</p> <p>where the &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your forecast export jobs, use the <a>ListForecastExportJobs</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateForecastExportJob(ctx, operations.CreateForecastExportJobRequest{
        CreateForecastExportJobRequest: shared.CreateForecastExportJobRequest{
            Destination: shared.DataDestination{
                S3Config: shared.S3Config{
                    KMSKeyArn: sdk.String("dolores"),
                    Path: "quis",
                    RoleArn: "totam",
                },
            },
            ForecastArn: "dignissimos",
            ForecastExportJobName: "eaque",
            Format: sdk.String("quis"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "eos",
                    Value: "perferendis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.CreateForecastExportJobXAmzTargetEnumAmazonForecastCreateForecastExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateForecastExportJobResponse != nil {
        // handle response
    }
}
```

## CreateMonitor

Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see how your predictor's performance changes over time. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring.html">Predictor Monitoring</a>. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateMonitor(ctx, operations.CreateMonitorRequest{
        CreateMonitorRequest: shared.CreateMonitorRequest{
            MonitorName: "recusandae",
            ResourceArn: "omnis",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "perspiciatis",
                    Value: "voluptatem",
                },
                shared.Tag{
                    Key: "porro",
                    Value: "consequuntur",
                },
                shared.Tag{
                    Key: "blanditiis",
                    Value: "error",
                },
            },
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.CreateMonitorXAmzTargetEnumAmazonForecastCreateMonitor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMonitorResponse != nil {
        // handle response
    }
}
```

## CreatePredictor

<note> <p> This operation creates a legacy predictor that does not include all the predictor functionalities provided by Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use <a>CreateAutoPredictor</a>.</p> </note> <p>Creates an Amazon Forecast predictor.</p> <p>In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters.</p> <p>Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the <a>CreateForecast</a> operation.</p> <p> To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation. </p> <p>You can specify a featurization configuration to fill and aggregate the data fields in the <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more information, see <a>FeaturizationConfig</a>.</p> <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the <code>DataFrequency</code> specified when the dataset was created matches the <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p> <p>By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9 (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor by setting the <code>ForecastTypes</code>. </p> <p> <b>AutoML</b> </p> <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The <code>objective function</code> is defined as the mean of the weighted losses over the forecast types. By default, these are the p10, p50, and p90 quantile losses. For more information, see <a>EvaluationResult</a>.</p> <p>When AutoML is enabled, the following properties are disallowed:</p> <ul> <li> <p> <code>AlgorithmArn</code> </p> </li> <li> <p> <code>HPOConfig</code> </p> </li> <li> <p> <code>PerformHPO</code> </p> </li> <li> <p> <code>TrainingParameters</code> </p> </li> </ul> <p>To get a list of all of your predictors, use the <a>ListPredictors</a> operation.</p> <note> <p>Before you can use the predictor to create a forecast, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePredictor(ctx, operations.CreatePredictorRequest{
        CreatePredictorRequest: shared.CreatePredictorRequest{
            AlgorithmArn: sdk.String("iste"),
            AutoMLOverrideStrategy: shared.AutoMLOverrideStrategyEnumAccuracyOptimized.ToPointer(),
            EncryptionConfig: &shared.EncryptionConfig{
                KMSKeyArn: "deleniti",
                RoleArn: "pariatur",
            },
            EvaluationParameters: &shared.EvaluationParameters{
                BackTestWindowOffset: sdk.Int64(589910),
                NumberOfBacktestWindows: sdk.Int64(750844),
            },
            FeaturizationConfig: shared.FeaturizationConfig{
                Featurizations: []shared.Featurization{
                    shared.Featurization{
                        AttributeName: "delectus",
                        FeaturizationPipeline: []shared.FeaturizationMethod{
                            shared.FeaturizationMethod{
                                FeaturizationMethodName: shared.FeaturizationMethodNameEnumFilling,
                                FeaturizationMethodParameters: map[string]string{
                                    "aliquid": "dolorem",
                                    "dolorem": "dolor",
                                    "qui": "ipsum",
                                },
                            },
                            shared.FeaturizationMethod{
                                FeaturizationMethodName: shared.FeaturizationMethodNameEnumFilling,
                                FeaturizationMethodParameters: map[string]string{
                                    "excepturi": "cum",
                                    "voluptate": "dignissimos",
                                    "reiciendis": "amet",
                                    "dolorum": "numquam",
                                },
                            },
                        },
                    },
                    shared.Featurization{
                        AttributeName: "veritatis",
                        FeaturizationPipeline: []shared.FeaturizationMethod{
                            shared.FeaturizationMethod{
                                FeaturizationMethodName: shared.FeaturizationMethodNameEnumFilling,
                                FeaturizationMethodParameters: map[string]string{
                                    "iure": "odio",
                                },
                            },
                        },
                    },
                    shared.Featurization{
                        AttributeName: "quaerat",
                        FeaturizationPipeline: []shared.FeaturizationMethod{
                            shared.FeaturizationMethod{
                                FeaturizationMethodName: shared.FeaturizationMethodNameEnumFilling,
                                FeaturizationMethodParameters: map[string]string{
                                    "voluptatibus": "voluptas",
                                    "natus": "eos",
                                    "atque": "sit",
                                },
                            },
                            shared.FeaturizationMethod{
                                FeaturizationMethodName: shared.FeaturizationMethodNameEnumFilling,
                                FeaturizationMethodParameters: map[string]string{
                                    "ab": "soluta",
                                    "dolorum": "iusto",
                                    "voluptate": "dolorum",
                                    "deleniti": "omnis",
                                },
                            },
                            shared.FeaturizationMethod{
                                FeaturizationMethodName: shared.FeaturizationMethodNameEnumFilling,
                                FeaturizationMethodParameters: map[string]string{
                                    "distinctio": "asperiores",
                                    "nihil": "ipsum",
                                    "voluptate": "id",
                                    "saepe": "eius",
                                },
                            },
                            shared.FeaturizationMethod{
                                FeaturizationMethodName: shared.FeaturizationMethodNameEnumFilling,
                                FeaturizationMethodParameters: map[string]string{
                                    "perferendis": "amet",
                                },
                            },
                        },
                    },
                },
                ForecastDimensions: []string{
                    "accusamus",
                    "ad",
                    "saepe",
                    "suscipit",
                },
                ForecastFrequency: "deserunt",
            },
            ForecastHorizon: 588317,
            ForecastTypes: []string{
                "repellendus",
                "totam",
            },
            HPOConfig: &shared.HyperParameterTuningJobConfig{
                ParameterRanges: &shared.ParameterRanges{
                    CategoricalParameterRanges: []shared.CategoricalParameterRange{
                        shared.CategoricalParameterRange{
                            Name: "Cristina Hahn",
                            Values: []string{
                                "officiis",
                                "qui",
                                "dolorum",
                                "a",
                            },
                        },
                        shared.CategoricalParameterRange{
                            Name: "Fannie Kub",
                            Values: []string{
                                "amet",
                                "tempore",
                                "accusamus",
                                "numquam",
                            },
                        },
                        shared.CategoricalParameterRange{
                            Name: "Florence Will",
                            Values: []string{
                                "expedita",
                            },
                        },
                    },
                    ContinuousParameterRanges: []shared.ContinuousParameterRange{
                        shared.ContinuousParameterRange{
                            MaxValue: 1536.94,
                            MinValue: 4246.85,
                            Name: "Glen Oberbrunner",
                            ScalingType: shared.ScalingTypeEnumLinear.ToPointer(),
                        },
                    },
                    IntegerParameterRanges: []shared.IntegerParameterRange{
                        shared.IntegerParameterRange{
                            MaxValue: 586784,
                            MinValue: 807581,
                            Name: "Dominic Carroll",
                            ScalingType: shared.ScalingTypeEnumLinear.ToPointer(),
                        },
                    },
                },
            },
            InputDataConfig: shared.InputDataConfig{
                DatasetGroupArn: "aspernatur",
                SupplementaryFeatures: []shared.SupplementaryFeature{
                    shared.SupplementaryFeature{
                        Name: "Cesar Hyatt",
                        Value: "temporibus",
                    },
                },
            },
            OptimizationMetric: shared.OptimizationMetricEnumWape.ToPointer(),
            PerformAutoML: sdk.Bool(false),
            PerformHPO: sdk.Bool(false),
            PredictorName: "neque",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "magni",
                    Value: "odio",
                },
            },
            TrainingParameters: map[string]string{
                "ullam": "nam",
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.CreatePredictorXAmzTargetEnumAmazonForecastCreatePredictor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePredictorResponse != nil {
        // handle response
    }
}
```

## CreatePredictorBacktestExportJob

<p>Exports backtest forecasts and accuracy metrics generated by the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. Two folders containing CSV or Parquet files are exported to your specified S3 bucket.</p> <p> The export file names will match the following conventions:</p> <p> <code>&lt;ExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;.csv</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDate format (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribePredictorBacktestExportJob</a> operation.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePredictorBacktestExportJob(ctx, operations.CreatePredictorBacktestExportJobRequest{
        CreatePredictorBacktestExportJobRequest: shared.CreatePredictorBacktestExportJobRequest{
            Destination: shared.DataDestination{
                S3Config: shared.S3Config{
                    KMSKeyArn: sdk.String("ipsum"),
                    Path: "veritatis",
                    RoleArn: "nobis",
                },
            },
            Format: sdk.String("quos"),
            PredictorArn: "tempore",
            PredictorBacktestExportJobName: "cupiditate",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "delectus",
                    Value: "dolorem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.CreatePredictorBacktestExportJobXAmzTargetEnumAmazonForecastCreatePredictorBacktestExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePredictorBacktestExportJobResponse != nil {
        // handle response
    }
}
```

## CreateWhatIfAnalysis

<p>What-if analysis is a scenario modeling technique where you make a hypothetical change to a time series and compare the forecasts generated by these changes against the baseline, unchanged time series. It is important to remember that the purpose of a what-if analysis is to understand how a forecast can change given different modifications to the baseline time series.</p> <p>For example, imagine you are a clothing retailer who is considering an end of season sale to clear space for new styles. After creating a baseline forecast, you can use a what-if analysis to investigate how different sales tactics might affect your goals.</p> <p>You could create a scenario where everything is given a 25% markdown, and another where everything is given a fixed dollar markdown. You could create a scenario where the sale lasts for one week and another where the sale lasts for one month. With a what-if analysis, you can compare many different scenarios against each other.</p> <p>Note that a what-if analysis is meant to display what the forecasting model has learned and how it will behave in the scenarios that you are evaluating. Do not blindly use the results of the what-if analysis to make business decisions. For instance, forecasts might not be accurate for novel scenarios where there is no reference available to determine whether a forecast is good.</p> <p>The <a>TimeSeriesSelector</a> object defines the items that you want in the what-if analysis.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateWhatIfAnalysis(ctx, operations.CreateWhatIfAnalysisRequest{
        CreateWhatIfAnalysisRequest: shared.CreateWhatIfAnalysisRequest{
            ForecastArn: "quas",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "consequatur",
                    Value: "est",
                },
                shared.Tag{
                    Key: "repellendus",
                    Value: "porro",
                },
                shared.Tag{
                    Key: "doloribus",
                    Value: "ut",
                },
                shared.Tag{
                    Key: "facilis",
                    Value: "cupiditate",
                },
            },
            TimeSeriesSelector: &shared.TimeSeriesSelector{
                TimeSeriesIdentifiers: &shared.TimeSeriesIdentifiers{
                    DataSource: &shared.DataSource{
                        S3Config: shared.S3Config{
                            KMSKeyArn: sdk.String("qui"),
                            Path: "quae",
                            RoleArn: "laudantium",
                        },
                    },
                    Format: sdk.String("odio"),
                    Schema: &shared.Schema{
                        Attributes: []shared.SchemaAttribute{
                            shared.SchemaAttribute{
                                AttributeName: sdk.String("voluptatibus"),
                                AttributeType: shared.AttributeTypeEnumTimestamp.ToPointer(),
                            },
                            shared.SchemaAttribute{
                                AttributeName: sdk.String("vero"),
                                AttributeType: shared.AttributeTypeEnumTimestamp.ToPointer(),
                            },
                            shared.SchemaAttribute{
                                AttributeName: sdk.String("quis"),
                                AttributeType: shared.AttributeTypeEnumInteger.ToPointer(),
                            },
                        },
                    },
                },
            },
            WhatIfAnalysisName: "delectus",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.CreateWhatIfAnalysisXAmzTargetEnumAmazonForecastCreateWhatIfAnalysis,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWhatIfAnalysisResponse != nil {
        // handle response
    }
}
```

## CreateWhatIfForecast

A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateWhatIfForecast(ctx, operations.CreateWhatIfForecastRequest{
        CreateWhatIfForecastRequest: shared.CreateWhatIfForecastRequest{
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "odio",
                    Value: "similique",
                },
                shared.Tag{
                    Key: "facilis",
                    Value: "vero",
                },
                shared.Tag{
                    Key: "ducimus",
                    Value: "dolore",
                },
                shared.Tag{
                    Key: "quibusdam",
                    Value: "illum",
                },
            },
            TimeSeriesReplacementsDataSource: &shared.TimeSeriesReplacementsDataSource{
                Format: sdk.String("sequi"),
                S3Config: shared.S3Config{
                    KMSKeyArn: sdk.String("natus"),
                    Path: "impedit",
                    RoleArn: "aut",
                },
                Schema: shared.Schema{
                    Attributes: []shared.SchemaAttribute{
                        shared.SchemaAttribute{
                            AttributeName: sdk.String("exercitationem"),
                            AttributeType: shared.AttributeTypeEnumGeolocation.ToPointer(),
                        },
                        shared.SchemaAttribute{
                            AttributeName: sdk.String("fugit"),
                            AttributeType: shared.AttributeTypeEnumTimestamp.ToPointer(),
                        },
                        shared.SchemaAttribute{
                            AttributeName: sdk.String("maiores"),
                            AttributeType: shared.AttributeTypeEnumGeolocation.ToPointer(),
                        },
                        shared.SchemaAttribute{
                            AttributeName: sdk.String("iusto"),
                            AttributeType: shared.AttributeTypeEnumTimestamp.ToPointer(),
                        },
                    },
                },
                TimestampFormat: sdk.String("ducimus"),
            },
            TimeSeriesTransformations: []shared.TimeSeriesTransformation{
                shared.TimeSeriesTransformation{
                    Action: &shared.Action{
                        AttributeName: "officia",
                        Operation: shared.OperationEnumSubtract,
                        Value: 3685.84,
                    },
                    TimeSeriesConditions: []shared.TimeSeriesCondition{
                        shared.TimeSeriesCondition{
                            AttributeName: "aspernatur",
                            AttributeValue: "vel",
                            Condition: shared.ConditionEnumGreaterThan,
                        },
                        shared.TimeSeriesCondition{
                            AttributeName: "magnam",
                            AttributeValue: "ratione",
                            Condition: shared.ConditionEnumNotEquals,
                        },
                    },
                },
            },
            WhatIfAnalysisArn: "laudantium",
            WhatIfForecastName: "dicta",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.CreateWhatIfForecastXAmzTargetEnumAmazonForecastCreateWhatIfForecast,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWhatIfForecastResponse != nil {
        // handle response
    }
}
```

## CreateWhatIfForecastExport

<p>Exports a forecast created by the <a>CreateWhatIfForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p> <code>≈&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your what-if forecast export jobs, use the <a>ListWhatIfForecastExports</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateWhatIfForecastExport(ctx, operations.CreateWhatIfForecastExportRequest{
        CreateWhatIfForecastExportRequest: shared.CreateWhatIfForecastExportRequest{
            Destination: shared.DataDestination{
                S3Config: shared.S3Config{
                    KMSKeyArn: sdk.String("nostrum"),
                    Path: "sapiente",
                    RoleArn: "quisquam",
                },
            },
            Format: sdk.String("saepe"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "impedit",
                    Value: "corporis",
                },
                shared.Tag{
                    Key: "veniam",
                    Value: "aliquid",
                },
            },
            WhatIfForecastArns: []string{
                "magnam",
            },
            WhatIfForecastExportName: "ea",
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.CreateWhatIfForecastExportXAmzTargetEnumAmazonForecastCreateWhatIfForecastExport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWhatIfForecastExportResponse != nil {
        // handle response
    }
}
```

## DeleteDataset

<p>Deletes an Amazon Forecast dataset that was created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. You can only delete datasets that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.</p> <note> <p>Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update the dataset group, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation, omitting the deleted dataset's ARN.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDataset(ctx, operations.DeleteDatasetRequest{
        DeleteDatasetRequest: shared.DeleteDatasetRequest{
            DatasetArn: "libero",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.DeleteDatasetXAmzTargetEnumAmazonForecastDeleteDataset,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDatasetGroup

<p>Deletes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. You can only delete dataset groups that have a status of <code>ACTIVE</code>, <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> <p>This operation deletes only the dataset group, not the datasets in the group.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDatasetGroup(ctx, operations.DeleteDatasetGroupRequest{
        DeleteDatasetGroupRequest: shared.DeleteDatasetGroupRequest{
            DatasetGroupArn: "inventore",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.DeleteDatasetGroupXAmzTargetEnumAmazonForecastDeleteDatasetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDatasetImportJob

Deletes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDatasetImportJob(ctx, operations.DeleteDatasetImportJobRequest{
        DeleteDatasetImportJobRequest: shared.DeleteDatasetImportJobRequest{
            DatasetImportJobArn: "autem",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.DeleteDatasetImportJobXAmzTargetEnumAmazonForecastDeleteDatasetImportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteExplainability

<p>Deletes an Explainability resource.</p> <p>You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeExplainability</a> operation.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteExplainability(ctx, operations.DeleteExplainabilityRequest{
        DeleteExplainabilityRequest: shared.DeleteExplainabilityRequest{
            ExplainabilityArn: "tempora",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.DeleteExplainabilityXAmzTargetEnumAmazonForecastDeleteExplainability,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteExplainabilityExport

Deletes an Explainability export.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteExplainabilityExport(ctx, operations.DeleteExplainabilityExportRequest{
        DeleteExplainabilityExportRequest: shared.DeleteExplainabilityExportRequest{
            ExplainabilityExportArn: "eius",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.DeleteExplainabilityExportXAmzTargetEnumAmazonForecastDeleteExplainabilityExport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteForecast

<p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecast</a> operation.</p> <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you can no longer query the forecast.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteForecast(ctx, operations.DeleteForecastRequest{
        DeleteForecastRequest: shared.DeleteForecastRequest{
            ForecastArn: "ut",
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.DeleteForecastXAmzTargetEnumAmazonForecastDeleteForecast,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteForecastExportJob

Deletes a forecast export job created using the <a>CreateForecastExportJob</a> operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteForecastExportJob(ctx, operations.DeleteForecastExportJobRequest{
        DeleteForecastExportJobRequest: shared.DeleteForecastExportJobRequest{
            ForecastExportJobArn: "ipsa",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("fuga"),
        XAmzTarget: operations.DeleteForecastExportJobXAmzTargetEnumAmazonForecastDeleteForecastExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteMonitor

Deletes a monitor resource. You can only delete a monitor resource with a status of <code>ACTIVE</code>, <code>ACTIVE_STOPPED</code>, <code>CREATE_FAILED</code>, or <code>CREATE_STOPPED</code>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteMonitor(ctx, operations.DeleteMonitorRequest{
        DeleteMonitorRequest: shared.DeleteMonitorRequest{
            MonitorArn: "eius",
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.DeleteMonitorXAmzTargetEnumAmazonForecastDeleteMonitor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePredictor

Deletes a predictor created using the <a>DescribePredictor</a> or <a>CreatePredictor</a> operations. You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribePredictor</a> operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePredictor(ctx, operations.DeletePredictorRequest{
        DeletePredictorRequest: shared.DeletePredictorRequest{
            PredictorArn: "ipsam",
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.DeletePredictorXAmzTargetEnumAmazonForecastDeletePredictor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePredictorBacktestExportJob

Deletes a predictor backtest export job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePredictorBacktestExportJob(ctx, operations.DeletePredictorBacktestExportJobRequest{
        DeletePredictorBacktestExportJobRequest: shared.DeletePredictorBacktestExportJobRequest{
            PredictorBacktestExportJobArn: "quod",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.DeletePredictorBacktestExportJobXAmzTargetEnumAmazonForecastDeletePredictorBacktestExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteResourceTree

<p>Deletes an entire resource tree. This operation will delete the parent resource and its child resources.</p> <p>Child resources are resources that were created from another resource. For example, when a forecast is generated from a predictor, the forecast is the child resource and the predictor is the parent resource.</p> <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p> <ul> <li> <p> <b>Dataset</b>: dataset import jobs</p> </li> <li> <p> <b>Dataset Group</b>: predictors, predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Predictor</b>: predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Forecast</b>: forecast export jobs</p> </li> </ul> <note> <p> <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not delete datasets or exported files stored in Amazon S3. </p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteResourceTree(ctx, operations.DeleteResourceTreeRequest{
        DeleteResourceTreeRequest: shared.DeleteResourceTreeRequest{
            ResourceArn: "occaecati",
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.DeleteResourceTreeXAmzTargetEnumAmazonForecastDeleteResourceTree,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWhatIfAnalysis

<p>Deletes a what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation. You can delete only what-if analyses that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfAnalysis</a> operation. </p> <p>You can't delete a what-if analysis while any of its forecasts are being exported.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteWhatIfAnalysis(ctx, operations.DeleteWhatIfAnalysisRequest{
        DeleteWhatIfAnalysisRequest: shared.DeleteWhatIfAnalysisRequest{
            WhatIfAnalysisArn: "eum",
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.DeleteWhatIfAnalysisXAmzTargetEnumAmazonForecastDeleteWhatIfAnalysis,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWhatIfForecast

<p>Deletes a what-if forecast created using the <a>CreateWhatIfForecast</a> operation. You can delete only what-if forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecast</a> operation. </p> <p>You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteWhatIfForecast(ctx, operations.DeleteWhatIfForecastRequest{
        DeleteWhatIfForecastRequest: shared.DeleteWhatIfForecastRequest{
            WhatIfForecastArn: "incidunt",
        },
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.DeleteWhatIfForecastXAmzTargetEnumAmazonForecastDeleteWhatIfForecast,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWhatIfForecastExport

Deletes a what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation. You can delete only what-if forecast exports that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteWhatIfForecastExport(ctx, operations.DeleteWhatIfForecastExportRequest{
        DeleteWhatIfForecastExportRequest: shared.DeleteWhatIfForecastExportRequest{
            WhatIfForecastExportArn: "ratione",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        XAmzTarget: operations.DeleteWhatIfForecastExportXAmzTargetEnumAmazonForecastDeleteWhatIfForecastExport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeAutoPredictor

Describes a predictor created using the CreateAutoPredictor operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAutoPredictor(ctx, operations.DescribeAutoPredictorRequest{
        DescribeAutoPredictorRequest: shared.DescribeAutoPredictorRequest{
            PredictorArn: "accusamus",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.DescribeAutoPredictorXAmzTargetEnumAmazonForecastDescribeAutoPredictor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAutoPredictorResponse != nil {
        // handle response
    }
}
```

## DescribeDataset

<p>Describes an Amazon Forecast dataset created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation.</p> <p>In addition to listing the parameters specified in the <code>CreateDataset</code> request, this operation includes the following dataset properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDataset(ctx, operations.DescribeDatasetRequest{
        DescribeDatasetRequest: shared.DescribeDatasetRequest{
            DatasetArn: "saepe",
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.DescribeDatasetXAmzTargetEnumAmazonForecastDescribeDataset,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDatasetResponse != nil {
        // handle response
    }
}
```

## DescribeDatasetGroup

<p>Describes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>DatasetArns</code> - The datasets belonging to the group.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDatasetGroup(ctx, operations.DescribeDatasetGroupRequest{
        DescribeDatasetGroupRequest: shared.DescribeDatasetGroupRequest{
            DatasetGroupArn: "eligendi",
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.DescribeDatasetGroupXAmzTargetEnumAmazonForecastDescribeDatasetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDatasetGroupResponse != nil {
        // handle response
    }
}
```

## DescribeDatasetImportJob

<p>Describes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetImportJob</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>DataSize</code> </p> </li> <li> <p> <code>FieldStatistics</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDatasetImportJob(ctx, operations.DescribeDatasetImportJobRequest{
        DescribeDatasetImportJobRequest: shared.DescribeDatasetImportJobRequest{
            DatasetImportJobArn: "minus",
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.DescribeDatasetImportJobXAmzTargetEnumAmazonForecastDescribeDatasetImportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDatasetImportJobResponse != nil {
        // handle response
    }
}
```

## DescribeExplainability

Describes an Explainability resource created using the <a>CreateExplainability</a> operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeExplainability(ctx, operations.DescribeExplainabilityRequest{
        DescribeExplainabilityRequest: shared.DescribeExplainabilityRequest{
            ExplainabilityArn: "nulla",
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.DescribeExplainabilityXAmzTargetEnumAmazonForecastDescribeExplainability,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeExplainabilityResponse != nil {
        // handle response
    }
}
```

## DescribeExplainabilityExport

Describes an Explainability export created using the <a>CreateExplainabilityExport</a> operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeExplainabilityExport(ctx, operations.DescribeExplainabilityExportRequest{
        DescribeExplainabilityExportRequest: shared.DescribeExplainabilityExportRequest{
            ExplainabilityExportArn: "possimus",
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.DescribeExplainabilityExportXAmzTargetEnumAmazonForecastDescribeExplainabilityExport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeExplainabilityExportResponse != nil {
        // handle response
    }
}
```

## DescribeForecast

<p>Describes a forecast created using the <a>CreateForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetGroupArn</code> - The dataset group that provided the training data.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeForecast(ctx, operations.DescribeForecastRequest{
        DescribeForecastRequest: shared.DescribeForecastRequest{
            ForecastArn: "similique",
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.DescribeForecastXAmzTargetEnumAmazonForecastDescribeForecast,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeForecastResponse != nil {
        // handle response
    }
}
```

## DescribeForecastExportJob

<p>Describes a forecast export job created using the <a>CreateForecastExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreateForecastExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeForecastExportJob(ctx, operations.DescribeForecastExportJobRequest{
        DescribeForecastExportJobRequest: shared.DescribeForecastExportJobRequest{
            ForecastExportJobArn: "eius",
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DescribeForecastExportJobXAmzTargetEnumAmazonForecastDescribeForecastExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeForecastExportJobResponse != nil {
        // handle response
    }
}
```

## DescribeMonitor

<p>Describes a monitor resource. In addition to listing the properties provided in the <a>CreateMonitor</a> request, this operation lists the following properties:</p> <ul> <li> <p> <code>Baseline</code> </p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastEvaluationTime</code> </p> </li> <li> <p> <code>LastEvaluationState</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeMonitor(ctx, operations.DescribeMonitorRequest{
        DescribeMonitorRequest: shared.DescribeMonitorRequest{
            MonitorArn: "ullam",
        },
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.DescribeMonitorXAmzTargetEnumAmazonForecastDescribeMonitor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMonitorResponse != nil {
        // handle response
    }
}
```

## DescribePredictor

<note> <p> This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a legacy predictor, use <a>DescribeAutoPredictor</a>.</p> </note> <p>Describes a predictor created using the <a>CreatePredictor</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreatePredictor</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetImportJobArns</code> - The dataset import jobs used to import training data.</p> </li> <li> <p> <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were evaluated.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePredictor(ctx, operations.DescribePredictorRequest{
        DescribePredictorRequest: shared.DescribePredictorRequest{
            PredictorArn: "ex",
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.DescribePredictorXAmzTargetEnumAmazonForecastDescribePredictor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePredictorResponse != nil {
        // handle response
    }
}
```

## DescribePredictorBacktestExportJob

<p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreatePredictorBacktestExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> (if an error occurred)</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePredictorBacktestExportJob(ctx, operations.DescribePredictorBacktestExportJobRequest{
        DescribePredictorBacktestExportJobRequest: shared.DescribePredictorBacktestExportJobRequest{
            PredictorBacktestExportJobArn: "at",
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.DescribePredictorBacktestExportJobXAmzTargetEnumAmazonForecastDescribePredictorBacktestExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePredictorBacktestExportJobResponse != nil {
        // handle response
    }
}
```

## DescribeWhatIfAnalysis

<p>Describes the what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfAnalysis</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeWhatIfAnalysis(ctx, operations.DescribeWhatIfAnalysisRequest{
        DescribeWhatIfAnalysisRequest: shared.DescribeWhatIfAnalysisRequest{
            WhatIfAnalysisArn: "iste",
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.DescribeWhatIfAnalysisXAmzTargetEnumAmazonForecastDescribeWhatIfAnalysis,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWhatIfAnalysisResponse != nil {
        // handle response
    }
}
```

## DescribeWhatIfForecast

<p>Describes the what-if forecast created using the <a>CreateWhatIfForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeWhatIfForecast(ctx, operations.DescribeWhatIfForecastRequest{
        DescribeWhatIfForecastRequest: shared.DescribeWhatIfForecastRequest{
            WhatIfForecastArn: "ab",
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.DescribeWhatIfForecastXAmzTargetEnumAmazonForecastDescribeWhatIfForecast,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWhatIfForecastResponse != nil {
        // handle response
    }
}
```

## DescribeWhatIfForecastExport

<p>Describes the what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecastExport</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeWhatIfForecastExport(ctx, operations.DescribeWhatIfForecastExportRequest{
        DescribeWhatIfForecastExportRequest: shared.DescribeWhatIfForecastExportRequest{
            WhatIfForecastExportArn: "explicabo",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("velit"),
        XAmzTarget: operations.DescribeWhatIfForecastExportXAmzTargetEnumAmazonForecastDescribeWhatIfForecastExport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWhatIfForecastExportResponse != nil {
        // handle response
    }
}
```

## GetAccuracyMetrics

<p>Provides metrics on the accuracy of the models that were trained by the <a>CreatePredictor</a> operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Predictor Metrics</a>.</p> <p>This operation generates metrics for each backtest window that was evaluated. The number of backtest windows (<code>NumberOfBacktestWindows</code>) is specified using the <a>EvaluationParameters</a> object, which is optionally included in the <code>CreatePredictor</code> request. If <code>NumberOfBacktestWindows</code> isn't specified, the number defaults to one.</p> <p>The parameters of the <code>filling</code> method determine which items contribute to the metrics. If you want all items to contribute, specify <code>zero</code>. If you want only those items that have complete data in the range being evaluated to contribute, specify <code>nan</code>. For more information, see <a>FeaturizationMethod</a>.</p> <note> <p>Before you can get accuracy metrics, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAccuracyMetrics(ctx, operations.GetAccuracyMetricsRequest{
        GetAccuracyMetricsRequest: shared.GetAccuracyMetricsRequest{
            PredictorArn: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.GetAccuracyMetricsXAmzTargetEnumAmazonForecastGetAccuracyMetrics,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccuracyMetricsResponse != nil {
        // handle response
    }
}
```

## ListDatasetGroups

Returns a list of dataset groups created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. For each dataset group, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDatasetGroups(ctx, operations.ListDatasetGroupsRequest{
        ListDatasetGroupsRequest: shared.ListDatasetGroupsRequest{
            MaxResults: sdk.Int64(638762),
            NextToken: sdk.String("maxime"),
        },
        MaxResults: sdk.String("dignissimos"),
        NextToken: sdk.String("officia"),
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.ListDatasetGroupsXAmzTargetEnumAmazonForecastListDatasetGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatasetGroupsResponse != nil {
        // handle response
    }
}
```

## ListDatasetImportJobs

Returns a list of dataset import jobs created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation. You can filter the list by providing an array of <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Filter.html">Filter</a> objects.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDatasetImportJobs(ctx, operations.ListDatasetImportJobsRequest{
        ListDatasetImportJobsRequest: shared.ListDatasetImportJobsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIs,
                    Key: "fuga",
                    Value: "id",
                },
            },
            MaxResults: sdk.Int64(380729),
            NextToken: sdk.String("velit"),
        },
        MaxResults: sdk.String("culpa"),
        NextToken: sdk.String("est"),
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.ListDatasetImportJobsXAmzTargetEnumAmazonForecastListDatasetImportJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatasetImportJobsResponse != nil {
        // handle response
    }
}
```

## ListDatasets

Returns a list of datasets created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties, use the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDatasets(ctx, operations.ListDatasetsRequest{
        ListDatasetsRequest: shared.ListDatasetsRequest{
            MaxResults: sdk.Int64(287051),
            NextToken: sdk.String("possimus"),
        },
        MaxResults: sdk.String("facilis"),
        NextToken: sdk.String("cum"),
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.ListDatasetsXAmzTargetEnumAmazonForecastListDatasets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatasetsResponse != nil {
        // handle response
    }
}
```

## ListExplainabilities

<p>Returns a list of Explainability resources created using the <a>CreateExplainability</a> operation. This operation returns a summary for each Explainability. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability resource, use the ARN with the <a>DescribeExplainability</a> operation.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListExplainabilities(ctx, operations.ListExplainabilitiesRequest{
        ListExplainabilitiesRequest: shared.ListExplainabilitiesRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIs,
                    Key: "cum",
                    Value: "consectetur",
                },
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIs,
                    Key: "exercitationem",
                    Value: "earum",
                },
            },
            MaxResults: sdk.Int64(814967),
            NextToken: sdk.String("numquam"),
        },
        MaxResults: sdk.String("doloribus"),
        NextToken: sdk.String("suscipit"),
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.ListExplainabilitiesXAmzTargetEnumAmazonForecastListExplainabilities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExplainabilitiesResponse != nil {
        // handle response
    }
}
```

## ListExplainabilityExports

<p>Returns a list of Explainability exports created using the <a>CreateExplainabilityExport</a> operation. This operation returns a summary for each Explainability export. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability export, use the ARN with the <a>DescribeExplainability</a> operation.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListExplainabilityExports(ctx, operations.ListExplainabilityExportsRequest{
        ListExplainabilityExportsRequest: shared.ListExplainabilityExportsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIs,
                    Key: "amet",
                    Value: "beatae",
                },
            },
            MaxResults: sdk.Int64(489509),
            NextToken: sdk.String("a"),
        },
        MaxResults: sdk.String("debitis"),
        NextToken: sdk.String("consectetur"),
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("vitae"),
        XAmzTarget: operations.ListExplainabilityExportsXAmzTargetEnumAmazonForecastListExplainabilityExports,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExplainabilityExportsResponse != nil {
        // handle response
    }
}
```

## ListForecastExportJobs

Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a> operation. You can filter the list using an array of <a>Filter</a> objects.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListForecastExportJobs(ctx, operations.ListForecastExportJobsRequest{
        ListForecastExportJobsRequest: shared.ListForecastExportJobsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIsNot,
                    Key: "tempora",
                    Value: "aspernatur",
                },
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIs,
                    Key: "voluptas",
                    Value: "voluptas",
                },
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIs,
                    Key: "nobis",
                    Value: "dolorum",
                },
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIs,
                    Key: "minus",
                    Value: "dolores",
                },
            },
            MaxResults: sdk.Int64(503934),
            NextToken: sdk.String("in"),
        },
        MaxResults: sdk.String("dolore"),
        NextToken: sdk.String("aliquam"),
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.ListForecastExportJobsXAmzTargetEnumAmazonForecastListForecastExportJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListForecastExportJobsResponse != nil {
        // handle response
    }
}
```

## ListForecasts

Returns a list of forecasts created using the <a>CreateForecast</a> operation. For each forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the <a>DescribeForecast</a> operation. You can filter the list using an array of <a>Filter</a> objects.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListForecasts(ctx, operations.ListForecastsRequest{
        ListForecastsRequest: shared.ListForecastsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIs,
                    Key: "culpa",
                    Value: "corrupti",
                },
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIsNot,
                    Key: "totam",
                    Value: "hic",
                },
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIs,
                    Key: "nobis",
                    Value: "sit",
                },
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIsNot,
                    Key: "sed",
                    Value: "reiciendis",
                },
            },
            MaxResults: sdk.Int64(131852),
            NextToken: sdk.String("asperiores"),
        },
        MaxResults: sdk.String("facilis"),
        NextToken: sdk.String("voluptate"),
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.ListForecastsXAmzTargetEnumAmazonForecastListForecasts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListForecastsResponse != nil {
        // handle response
    }
}
```

## ListMonitorEvaluations

<p>Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource during different windows of time.</p> <p>For information about monitoring see <a>predictor-monitoring</a>. For more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListMonitorEvaluations(ctx, operations.ListMonitorEvaluationsRequest{
        ListMonitorEvaluationsRequest: shared.ListMonitorEvaluationsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIsNot,
                    Key: "explicabo",
                    Value: "voluptas",
                },
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIsNot,
                    Key: "architecto",
                    Value: "suscipit",
                },
            },
            MaxResults: sdk.Int64(960257),
            MonitorArn: "debitis",
            NextToken: sdk.String("illo"),
        },
        MaxResults: sdk.String("reiciendis"),
        NextToken: sdk.String("perferendis"),
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.ListMonitorEvaluationsXAmzTargetEnumAmazonForecastListMonitorEvaluations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMonitorEvaluationsResponse != nil {
        // handle response
    }
}
```

## ListMonitors

Returns a list of monitors created with the <a>CreateMonitor</a> operation and <a>CreateAutoPredictor</a> operation. For each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the <a>DescribeMonitor</a> operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListMonitors(ctx, operations.ListMonitorsRequest{
        ListMonitorsRequest: shared.ListMonitorsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIs,
                    Key: "occaecati",
                    Value: "quos",
                },
            },
            MaxResults: sdk.Int64(975752),
            NextToken: sdk.String("tempora"),
        },
        MaxResults: sdk.String("tempora"),
        NextToken: sdk.String("voluptate"),
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.ListMonitorsXAmzTargetEnumAmazonForecastListMonitors,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMonitorsResponse != nil {
        // handle response
    }
}
```

## ListPredictorBacktestExportJobs

<p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a summary for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular backtest export job, use the ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPredictorBacktestExportJobs(ctx, operations.ListPredictorBacktestExportJobsRequest{
        ListPredictorBacktestExportJobsRequest: shared.ListPredictorBacktestExportJobsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIs,
                    Key: "ipsam",
                    Value: "debitis",
                },
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIsNot,
                    Key: "sit",
                    Value: "nobis",
                },
            },
            MaxResults: sdk.Int64(625637),
            NextToken: sdk.String("veniam"),
        },
        MaxResults: sdk.String("minima"),
        NextToken: sdk.String("recusandae"),
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("veniam"),
        XAmzTarget: operations.ListPredictorBacktestExportJobsXAmzTargetEnumAmazonForecastListPredictorBacktestExportJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPredictorBacktestExportJobsResponse != nil {
        // handle response
    }
}
```

## ListPredictors

<p>Returns a list of predictors created using the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). </p> <p>You can retrieve the complete set of properties by using the ARN with the <a>DescribeAutoPredictor</a> and <a>DescribePredictor</a> operations. You can filter the list using an array of <a>Filter</a> objects.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPredictors(ctx, operations.ListPredictorsRequest{
        ListPredictorsRequest: shared.ListPredictorsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIsNot,
                    Key: "beatae",
                    Value: "laudantium",
                },
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIs,
                    Key: "praesentium",
                    Value: "cum",
                },
            },
            MaxResults: sdk.Int64(386827),
            NextToken: sdk.String("dolorum"),
        },
        MaxResults: sdk.String("voluptatum"),
        NextToken: sdk.String("error"),
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.ListPredictorsXAmzTargetEnumAmazonForecastListPredictors,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPredictorsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags for an Amazon Forecast resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceArn: "dolorum",
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAmazonForecastListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListWhatIfAnalyses

Returns a list of what-if analyses created using the <a>CreateWhatIfAnalysis</a> operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the <a>DescribeWhatIfAnalysis</a> operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListWhatIfAnalyses(ctx, operations.ListWhatIfAnalysesRequest{
        ListWhatIfAnalysesRequest: shared.ListWhatIfAnalysesRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIsNot,
                    Key: "expedita",
                    Value: "magnam",
                },
            },
            MaxResults: sdk.Int64(7884),
            NextToken: sdk.String("esse"),
        },
        MaxResults: sdk.String("ipsam"),
        NextToken: sdk.String("sit"),
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.ListWhatIfAnalysesXAmzTargetEnumAmazonForecastListWhatIfAnalyses,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWhatIfAnalysesResponse != nil {
        // handle response
    }
}
```

## ListWhatIfForecastExports

Returns a list of what-if forecast exports created using the <a>CreateWhatIfForecastExport</a> operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the <a>DescribeWhatIfForecastExport</a> operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListWhatIfForecastExports(ctx, operations.ListWhatIfForecastExportsRequest{
        ListWhatIfForecastExportsRequest: shared.ListWhatIfForecastExportsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIs,
                    Key: "vel",
                    Value: "nostrum",
                },
            },
            MaxResults: sdk.Int64(906172),
            NextToken: sdk.String("error"),
        },
        MaxResults: sdk.String("consequatur"),
        NextToken: sdk.String("incidunt"),
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.ListWhatIfForecastExportsXAmzTargetEnumAmazonForecastListWhatIfForecastExports,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWhatIfForecastExportsResponse != nil {
        // handle response
    }
}
```

## ListWhatIfForecasts

Returns a list of what-if forecasts created using the <a>CreateWhatIfForecast</a> operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the <a>DescribeWhatIfForecast</a> operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListWhatIfForecasts(ctx, operations.ListWhatIfForecastsRequest{
        ListWhatIfForecastsRequest: shared.ListWhatIfForecastsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIsNot,
                    Key: "laborum",
                    Value: "nam",
                },
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIsNot,
                    Key: "laboriosam",
                    Value: "alias",
                },
                shared.Filter{
                    Condition: shared.FilterConditionStringEnumIs,
                    Key: "deserunt",
                    Value: "voluptate",
                },
            },
            MaxResults: sdk.Int64(600392),
            NextToken: sdk.String("reiciendis"),
        },
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("repellendus"),
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("facere"),
        XAmzTarget: operations.ListWhatIfForecastsXAmzTargetEnumAmazonForecastListWhatIfForecasts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWhatIfForecastsResponse != nil {
        // handle response
    }
}
```

## ResumeResource

Resumes a stopped monitor resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ResumeResource(ctx, operations.ResumeResourceRequest{
        ResumeResourceRequest: shared.ResumeResourceRequest{
            ResourceArn: "fuga",
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.ResumeResourceXAmzTargetEnumAmazonForecastResumeResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopResource

<p>Stops a resource.</p> <p>The resource undergoes the following states: <code>CREATE_STOPPING</code> and <code>CREATE_STOPPED</code>. You cannot resume a resource once it has been stopped.</p> <p>This operation can be applied to the following resources (and their corresponding child resources):</p> <ul> <li> <p>Dataset Import Job</p> </li> <li> <p>Predictor Job</p> </li> <li> <p>Forecast Job</p> </li> <li> <p>Forecast Export Job</p> </li> <li> <p>Predictor Backtest Export Job</p> </li> <li> <p>Explainability Job</p> </li> <li> <p>Explainability Export Job</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopResource(ctx, operations.StopResourceRequest{
        StopResourceRequest: shared.StopResourceRequest{
            ResourceArn: "atque",
        },
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.StopResourceXAmzTargetEnumAmazonForecastStopResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "esse",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "assumenda",
                    Value: "ea",
                },
            },
        },
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAmazonForecastTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Deletes the specified tags from a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "aspernatur",
            TagKeys: []string{
                "maiores",
                "corrupti",
            },
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAmazonForecastUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateDatasetGroup

<p>Replaces the datasets in a dataset group with the specified datasets.</p> <note> <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation to get the status.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDatasetGroup(ctx, operations.UpdateDatasetGroupRequest{
        UpdateDatasetGroupRequest: shared.UpdateDatasetGroupRequest{
            DatasetArns: []string{
                "recusandae",
            },
            DatasetGroupArn: "dolorum",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.UpdateDatasetGroupXAmzTargetEnumAmazonForecastUpdateDatasetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDatasetGroupResponse != nil {
        // handle response
    }
}
```
