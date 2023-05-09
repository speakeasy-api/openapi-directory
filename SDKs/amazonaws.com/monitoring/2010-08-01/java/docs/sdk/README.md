# SDK

## Overview

<p>Amazon CloudWatch monitors your Amazon Web Services (Amazon Web Services) resources and the applications you run on Amazon Web Services in real time. You can use CloudWatch to collect and track metrics, which are the variables you want to measure for your resources and applications.</p> <p>CloudWatch alarms send notifications or automatically change the resources you are monitoring based on rules that you define. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2 instances. Then, use this data to determine whether you should launch additional instances to handle increased load. You can also use this data to stop under-used instances to save money.</p> <p>In addition to monitoring the built-in metrics that come with Amazon Web Services, you can monitor your own custom metrics. With CloudWatch, you gain system-wide visibility into resource utilization, application performance, and operational health.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/monitoring/>
### Available Operations

* [getDeleteAlarms](#getdeletealarms) - <p>Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't delete two composite alarms with one operation.</p> <p> If you specify an incorrect alarm name or make any other error in the operation, no alarms are deleted. To confirm that alarms were deleted successfully, you can use the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> operation after using <code>DeleteAlarms</code>.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note>
* [getDeleteDashboards](#getdeletedashboards) - Deletes all dashboards that you specify. You can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted.
* [getDeleteInsightRules](#getdeleteinsightrules) - <p>Permanently deletes the specified Contributor Insights rules.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>
* [getDeleteMetricStream](#getdeletemetricstream) - Permanently deletes the metric stream that you specify.
* [getDescribeAlarmHistory](#getdescribealarmhistory) - <p>Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p> <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p> <p>To use this operation and return information about a composite alarm, you must be signed on with the <code>cloudwatch:DescribeAlarmHistory</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarmHistory</code> permission has a narrower scope.</p>
* [getDescribeAlarms](#getdescribealarms) - <p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm name, the alarm state, or a prefix for any action.</p> <p>To use this operation and return information about composite alarms, you must be signed on with the <code>cloudwatch:DescribeAlarms</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarms</code> permission has a narrower scope.</p>
* [getDescribeInsightRules](#getdescribeinsightrules) - <p>Returns a list of all the Contributor Insights rules in your account.</p> <p>For more information about Contributor Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>
* [getDisableAlarmActions](#getdisablealarmactions) - Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.
* [getDisableInsightRules](#getdisableinsightrules) - Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs.
* [getEnableAlarmActions](#getenablealarmactions) - Enables the actions for the specified alarms.
* [getEnableInsightRules](#getenableinsightrules) - Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.
* [getGETDashboard](#getgetdashboard) - <p>Displays the details of the dashboard that you specify.</p> <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create the copy.</p>
* [getGETInsightRuleReport](#getgetinsightrulereport) - <p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of contributors to the log group.</p> <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>
* [getGETMetricStream](#getgetmetricstream) - Returns information about the metric stream that you specify.
* [getGETMetricWidgetImage](#getgetmetricwidgetimage) - <p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard.</p> <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations.</p> <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p> <ul> <li> <p>As many as 100 metrics in the graph.</p> </li> <li> <p>Up to 100 KB uncompressed payload.</p> </li> </ul>
* [getListDashboards](#getlistdashboards) - <p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed. </p> <p> <code>ListDashboards</code> returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call <code>ListDashboards</code> again and include the value you received for <code>NextToken</code> in the first call, to receive the next 1000 results.</p>
* [getListManagedInsightRules](#getlistmanagedinsightrules) -  Returns a list that contains the number of managed Contributor Insights rules in your account. 
* [getListMetricStreams](#getlistmetricstreams) - Returns a list of metric streams in this account.
* [getListTagsForResource](#getlisttagsforresource) - Displays the tags associated with a CloudWatch resource. Currently, alarms and Contributor Insights rules support tagging.
* [getPutDashboard](#getputdashboard) - <p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here.</p> <p>All dashboards in your account are global, not region-specific.</p> <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p> <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the <code>DashboardBody</code> script or the CloudFormation template used to create the dashboard.</p>
* [getSetAlarmState](#getsetalarmstate) - <p>Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to <code>ALARM</code> sends an SNS message.</p> <p>Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p> <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It returns to its actual state only once any of its children alarms change state. It is also reevaluated if you update its configuration.</p> <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>
* [getStartMetricStreams](#getstartmetricstreams) - Starts the streaming of metrics for one or more of your metric streams.
* [getStopMetricStreams](#getstopmetricstreams) - Stops the streaming of metrics for one or more of your metric streams.
* [getUntagResource](#getuntagresource) - Removes one or more tags from the specified resource.
* [postDeleteAlarms](#postdeletealarms) - <p>Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't delete two composite alarms with one operation.</p> <p> If you specify an incorrect alarm name or make any other error in the operation, no alarms are deleted. To confirm that alarms were deleted successfully, you can use the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> operation after using <code>DeleteAlarms</code>.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note>
* [postDeleteAnomalyDetector](#postdeleteanomalydetector) -  Deletes the specified anomaly detection model from your account. For more information about how to delete an anomaly detection model, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Anomaly_Detection_Alarm.html#Delete_Anomaly_Detection_Model">Deleting an anomaly detection model</a> in the <i>CloudWatch User Guide</i>. 
* [postDeleteDashboards](#postdeletedashboards) - Deletes all dashboards that you specify. You can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted.
* [postDeleteInsightRules](#postdeleteinsightrules) - <p>Permanently deletes the specified Contributor Insights rules.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>
* [postDeleteMetricStream](#postdeletemetricstream) - Permanently deletes the metric stream that you specify.
* [postDescribeAlarmHistory](#postdescribealarmhistory) - <p>Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p> <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p> <p>To use this operation and return information about a composite alarm, you must be signed on with the <code>cloudwatch:DescribeAlarmHistory</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarmHistory</code> permission has a narrower scope.</p>
* [postDescribeAlarms](#postdescribealarms) - <p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm name, the alarm state, or a prefix for any action.</p> <p>To use this operation and return information about composite alarms, you must be signed on with the <code>cloudwatch:DescribeAlarms</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarms</code> permission has a narrower scope.</p>
* [postDescribeAlarmsForMetric](#postdescribealarmsformetric) - <p>Retrieves the alarms for the specified metric. To filter the results, specify a statistic, period, or unit.</p> <p>This operation retrieves only standard alarms that are based on the specified metric. It does not return alarms based on math expressions that use the specified metric, or composite alarms that use the specified metric.</p>
* [postDescribeAnomalyDetectors](#postdescribeanomalydetectors) - Lists the anomaly detection models that you have created in your account. For single metric anomaly detectors, you can list all of the models in your account or filter the results to only the models that are related to a certain namespace, metric name, or metric dimension. For metric math anomaly detectors, you can list them by adding <code>METRIC_MATH</code> to the <code>AnomalyDetectorTypes</code> array. This will return all metric math anomaly detectors in your account.
* [postDescribeInsightRules](#postdescribeinsightrules) - <p>Returns a list of all the Contributor Insights rules in your account.</p> <p>For more information about Contributor Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>
* [postDisableAlarmActions](#postdisablealarmactions) - Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.
* [postDisableInsightRules](#postdisableinsightrules) - Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs.
* [postEnableAlarmActions](#postenablealarmactions) - Enables the actions for the specified alarms.
* [postEnableInsightRules](#postenableinsightrules) - Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.
* [postGetDashboard](#postgetdashboard) - <p>Displays the details of the dashboard that you specify.</p> <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create the copy.</p>
* [postGetInsightRuleReport](#postgetinsightrulereport) - <p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of contributors to the log group.</p> <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>
* [postGetMetricData](#postgetmetricdata) - <p>You can use the <code>GetMetricData</code> API to retrieve CloudWatch metric values. The operation can also include a CloudWatch Metrics Insights query, and one or more metric math functions.</p> <p>A <code>GetMetricData</code> operation that does not include a query can retrieve as many as 500 different metrics in a single request, with a total of as many as 100,800 data points. You can also optionally perform metric math expressions on the values of the returned statistics, to create new time series that represent new insights into your data. For example, using Lambda metrics, you could divide the Errors metric by the Invocations metric to get an error rate time series. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>If you include a Metrics Insights query, each <code>GetMetricData</code> operation can include only one query. But the same <code>GetMetricData</code> operation can also retrieve other metrics. Metrics Insights queries can query only the most recent three hours of metric data. For more information about Metrics Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/query_with_cloudwatch-metrics-insights.html">Query your metrics with CloudWatch Metrics Insights</a>.</p> <p>Calls to the <code>GetMetricData</code> API have a different pricing structure than calls to <code>GetMetricStatistics</code>. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>If you omit <code>Unit</code> in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p> <p> <b>Using Metrics Insights queries with metric math</b> </p> <p>You can't mix a Metric Insights query and metric math syntax in the same expression, but you can reference results from a Metrics Insights query within other Metric math expressions. A Metrics Insights query without a <b>GROUP BY</b> clause returns a single time-series (TS), and can be used as input for a metric math expression that expects a single time series. A Metrics Insights query with a <b>GROUP BY</b> clause returns an array of time-series (TS[]), and can be used as input for a metric math expression that expects an array of time series. </p>
* [postGetMetricStatistics](#postgetmetricstatistics) - <p>Gets statistics for the specified metric.</p> <p>The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. Data points are not returned in chronological order.</p> <p>CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The SampleCount value of the statistic set is 1.</p> </li> <li> <p>The Min and the Max values of the statistic set are equal.</p> </li> </ul> <p>Percentile statistics are not available for metrics when any of the metric values are negative numbers.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016.</p> <p>For information about metrics and dimensions supported by Amazon Web Services services, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html">Amazon CloudWatch Metrics and Dimensions Reference</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
* [postGetMetricStream](#postgetmetricstream) - Returns information about the metric stream that you specify.
* [postGetMetricWidgetImage](#postgetmetricwidgetimage) - <p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard.</p> <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations.</p> <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p> <ul> <li> <p>As many as 100 metrics in the graph.</p> </li> <li> <p>Up to 100 KB uncompressed payload.</p> </li> </ul>
* [postListDashboards](#postlistdashboards) - <p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed. </p> <p> <code>ListDashboards</code> returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call <code>ListDashboards</code> again and include the value you received for <code>NextToken</code> in the first call, to receive the next 1000 results.</p>
* [postListManagedInsightRules](#postlistmanagedinsightrules) -  Returns a list that contains the number of managed Contributor Insights rules in your account. 
* [postListMetricStreams](#postlistmetricstreams) - Returns a list of metric streams in this account.
* [postListMetrics](#postlistmetrics) - <p>List the specified metrics. You can use the returned metrics with <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> to get statistical data.</p> <p>Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls.</p> <p>After you create a metric, allow up to 15 minutes for the metric to appear. To see metric statistics sooner, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view metrics from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p> <p> <code>ListMetrics</code> doesn't return information about metrics if those metrics haven't reported data in the past two weeks. To retrieve those metrics, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>
* [postListTagsForResource](#postlisttagsforresource) - Displays the tags associated with a CloudWatch resource. Currently, alarms and Contributor Insights rules support tagging.
* [postPutAnomalyDetector](#postputanomalydetector) - <p>Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>
* [postPutCompositeAlarm](#postputcompositealarm) - <p>Creates or updates a <i>composite alarm</i>. When you create a composite alarm, you specify a rule expression for the alarm that takes into account the alarm states of other alarms that you have created. The composite alarm goes into ALARM state only if all conditions of the rule are met.</p> <p>The alarms specified in a composite alarm's rule expression can include metric alarms and other composite alarms. The rule expression of a composite alarm can include as many as 100 underlying alarms. Any single alarm can be included in the rule expressions of as many as 150 composite alarms.</p> <p>Using composite alarms can reduce alarm noise. You can create multiple metric alarms, and also create a composite alarm and set up alerts only for the composite alarm. For example, you could create a composite alarm that goes into ALARM state only when more than one of the underlying metric alarms are in ALARM state.</p> <p>Currently, the only alarm actions that can be taken by composite alarms are notifying SNS topics.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. For a composite alarm, this initial time after creation is the only time that the alarm can be in <code>INSUFFICIENT_DATA</code> state.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>To use this operation, you must be signed on with the <code>cloudwatch:PutCompositeAlarm</code> permission that is scoped to <code>*</code>. You can't create a composite alarms if your <code>cloudwatch:PutCompositeAlarm</code> permission has a narrower scope.</p> <p>If you are an IAM user, you must have <code>iam:CreateServiceLinkedRole</code> to create a composite alarm that has Systems Manager OpsItem actions.</p>
* [postPutDashboard](#postputdashboard) - <p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here.</p> <p>All dashboards in your account are global, not region-specific.</p> <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p> <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the <code>DashboardBody</code> script or the CloudFormation template used to create the dashboard.</p>
* [postPutInsightRule](#postputinsightrule) - <p>Creates a Contributor Insights rule. Rules evaluate log events in a CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>
* [postPutManagedInsightRules](#postputmanagedinsightrules) -  Creates a managed Contributor Insights rule for a specified Amazon Web Services resource. When you enable a managed rule, you create a Contributor Insights rule that collects data from Amazon Web Services services. You cannot edit these rules with <code>PutInsightRule</code>. The rules can be enabled, disabled, and deleted using <code>EnableInsightRules</code>, <code>DisableInsightRules</code>, and <code>DeleteInsightRules</code>. If a previously created managed rule is currently disabled, a subsequent call to this API will re-enable it. Use <code>ListManagedInsightRules</code> to describe all available rules. 
* [postPutMetricAlarm](#postputmetricalarm) - <p>Creates or updates an alarm and associates it with the specified metric, metric math expression, anomaly detection model, or Metrics Insights query. For more information about using a Metrics Insights query for an alarm, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Metrics_Insights_Alarm.html">Create alarms on Metrics Insights queries</a>.</p> <p>Alarms based on anomaly detection models cannot have Auto Scaling actions.</p> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations:</p> <ul> <li> <p>The <code>iam:CreateServiceLinkedRole</code> permission for all alarms with EC2 actions</p> </li> <li> <p>The <code>iam:CreateServiceLinkedRole</code> permissions to create an alarm with Systems Manager OpsItem or response plan actions.</p> </li> </ul> <p>The first time you create an alarm in the Amazon Web Services Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked roles are called <code>AWSServiceRoleForCloudWatchEvents</code> and <code>AWSServiceRoleForCloudWatchAlarms_ActionSSM</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Amazon Web Services service-linked role</a>.</p> <p> <b>Cross-account alarms</b> </p> <p>You can set an alarm on metrics in the current account, or in another account. To create a cross-account alarm that watches a metric in a different account, you must have completed the following pre-requisites:</p> <ul> <li> <p>The account where the metrics are located (the <i>sharing account</i>) must already have a sharing role named <b>CloudWatch-CrossAccountSharingRole</b>. If it does not already have this role, you must create it using the instructions in <b>Set up a sharing account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region"> Cross-account cross-Region CloudWatch console</a>. The policy for that role must grant access to the ID of the account where you are creating the alarm. </p> </li> <li> <p>The account where you are creating the alarm (the <i>monitoring account</i>) must already have a service-linked role named <b>AWSServiceRoleForCloudWatchCrossAccount</b> to allow CloudWatch to assume the sharing role in the sharing account. If it does not, you must create it following the directions in <b>Set up a monitoring account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region"> Cross-account cross-Region CloudWatch console</a>.</p> </li> </ul>
* [postPutMetricData](#postputmetricdata) - <p>Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p> <p>You can publish either individual data points in the <code>Value</code> field, or arrays of values and the number of times each value occurred during the period by using the <code>Values</code> and <code>Counts</code> fields in the <code>MetricDatum</code> structure. Using the <code>Values</code> and <code>Counts</code> method enables you to publish up to 150 values per metric with one <code>PutMetricData</code> request, and supports retrieving percentile statistics on this data.</p> <p>Each <code>PutMetricData</code> request is limited to 1 MB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 1000 different metrics.</p> <p>Although the <code>Value</code> parameter accepts numbers of type <code>Double</code>, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p> <p>You can use up to 30 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>You specify the time stamp to be associated with each data point. You can specify time stamps that are as much as two weeks before the current date, and as much as 2 hours after the current day and time.</p> <p>Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> from the time they are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available for for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The <code>SampleCount</code> value of the statistic set is 1 and <code>Min</code>, <code>Max</code>, and <code>Sum</code> are all equal.</p> </li> <li> <p>The <code>Min</code> and <code>Max</code> are equal, and <code>Sum</code> is equal to <code>Min</code> multiplied by <code>SampleCount</code>.</p> </li> </ul>
* [postPutMetricStream](#postputmetricstream) - <p>Creates or updates a metric stream. Metric streams can automatically stream CloudWatch metrics to Amazon Web Services destinations, including Amazon S3, and to many third-party solutions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html"> Using Metric Streams</a>.</p> <p>To create a metric stream, you must be signed in to an account that has the <code>iam:PassRole</code> permission and either the <code>CloudWatchFullAccess</code> policy or the <code>cloudwatch:PutMetricStream</code> permission.</p> <p>When you create or update a metric stream, you choose one of the following:</p> <ul> <li> <p>Stream metrics from all metric namespaces in the account.</p> </li> <li> <p>Stream metrics from all metric namespaces in the account, except for the namespaces that you list in <code>ExcludeFilters</code>.</p> </li> <li> <p>Stream metrics from only the metric namespaces that you list in <code>IncludeFilters</code>.</p> </li> </ul> <p>By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>, <code>SUM</code>, and <code>SAMPLECOUNT</code> statistics for each metric that is streamed. You can use the <code>StatisticsConfigurations</code> parameter to have the metric stream send additional statistics in the stream. Streaming additional statistics incurs additional costs. For more information, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>. </p> <p>When you use <code>PutMetricStream</code> to create a new metric stream, the stream is created in the <code>running</code> state. If you use it to update an existing stream, the state of the stream is not changed.</p> <p>If you are using CloudWatch cross-account observability and you create a metric stream in a monitoring account, you can choose whether to include metrics from source accounts in the stream. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
* [postSetAlarmState](#postsetalarmstate) - <p>Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to <code>ALARM</code> sends an SNS message.</p> <p>Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p> <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It returns to its actual state only once any of its children alarms change state. It is also reevaluated if you update its configuration.</p> <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>
* [postStartMetricStreams](#poststartmetricstreams) - Starts the streaming of metrics for one or more of your metric streams.
* [postStopMetricStreams](#poststopmetricstreams) - Stops the streaming of metrics for one or more of your metric streams.
* [postTagResource](#posttagresource) - <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Currently, the only CloudWatch resources that can be tagged are alarms and Contributor Insights rules.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with an alarm that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a CloudWatch resource.</p>
* [postUntagResource](#postuntagresource) - Removes one or more tags from the specified resource.

## getDeleteAlarms

<p>Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't delete two composite alarms with one operation.</p> <p> If you specify an incorrect alarm name or make any other error in the operation, no alarms are deleted. To confirm that alarms were deleted successfully, you can use the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> operation after using <code>DeleteAlarms</code>.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteAlarmsActionEnum;
import org.openapis.openapi.models.operations.GETDeleteAlarmsRequest;
import org.openapis.openapi.models.operations.GETDeleteAlarmsResponse;
import org.openapis.openapi.models.operations.GETDeleteAlarmsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteAlarmsRequest req = new GETDeleteAlarmsRequest(GETDeleteAlarmsActionEnum.DELETE_ALARMS,                 new String[]{{
                                add("debitis"),
                                add("ipsa"),
                            }}, GETDeleteAlarmsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "suscipit";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "voluptatum";
            }};            

            GETDeleteAlarmsResponse res = sdk.sdk.getDeleteAlarms(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDashboards

Deletes all dashboards that you specify. You can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDashboardsActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDashboardsRequest;
import org.openapis.openapi.models.operations.GETDeleteDashboardsResponse;
import org.openapis.openapi.models.operations.GETDeleteDashboardsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDashboardsRequest req = new GETDeleteDashboardsRequest(GETDeleteDashboardsActionEnum.DELETE_DASHBOARDS,                 new String[]{{
                                add("nisi"),
                                add("recusandae"),
                                add("temporibus"),
                            }}, GETDeleteDashboardsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "quis";
                xAmzCredential = "veritatis";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "repellendus";
            }};            

            GETDeleteDashboardsResponse res = sdk.sdk.getDeleteDashboards(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteInsightRules

<p>Permanently deletes the specified Contributor Insights rules.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteInsightRulesActionEnum;
import org.openapis.openapi.models.operations.GETDeleteInsightRulesRequest;
import org.openapis.openapi.models.operations.GETDeleteInsightRulesResponse;
import org.openapis.openapi.models.operations.GETDeleteInsightRulesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteInsightRulesRequest req = new GETDeleteInsightRulesRequest(GETDeleteInsightRulesActionEnum.DELETE_INSIGHT_RULES,                 new String[]{{
                                add("odit"),
                                add("at"),
                                add("at"),
                                add("maiores"),
                            }}, GETDeleteInsightRulesVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            GETDeleteInsightRulesResponse res = sdk.sdk.getDeleteInsightRules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteMetricStream

Permanently deletes the metric stream that you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteMetricStreamActionEnum;
import org.openapis.openapi.models.operations.GETDeleteMetricStreamRequest;
import org.openapis.openapi.models.operations.GETDeleteMetricStreamResponse;
import org.openapis.openapi.models.operations.GETDeleteMetricStreamVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteMetricStreamRequest req = new GETDeleteMetricStreamRequest(GETDeleteMetricStreamActionEnum.DELETE_METRIC_STREAM, "nam", GETDeleteMetricStreamVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "fugit";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "hic";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "totam";
            }};            

            GETDeleteMetricStreamResponse res = sdk.sdk.getDeleteMetricStream(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAlarmHistory

<p>Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p> <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p> <p>To use this operation and return information about a composite alarm, you must be signed on with the <code>cloudwatch:DescribeAlarmHistory</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarmHistory</code> permission has a narrower scope.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAlarmHistoryActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAlarmHistoryHistoryItemTypeEnum;
import org.openapis.openapi.models.operations.GETDescribeAlarmHistoryRequest;
import org.openapis.openapi.models.operations.GETDescribeAlarmHistoryResponse;
import org.openapis.openapi.models.operations.GETDescribeAlarmHistoryScanByEnum;
import org.openapis.openapi.models.operations.GETDescribeAlarmHistoryVersionEnum;
import org.openapis.openapi.models.shared.AlarmTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAlarmHistoryRequest req = new GETDescribeAlarmHistoryRequest(GETDescribeAlarmHistoryActionEnum.DESCRIBE_ALARM_HISTORY, GETDescribeAlarmHistoryVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                alarmName = "commodi";
                alarmTypes = new org.openapis.openapi.models.shared.AlarmTypeEnum[]{{
                    add(AlarmTypeEnum.COMPOSITE_ALARM),
                    add(AlarmTypeEnum.COMPOSITE_ALARM),
                }};
                endDate = OffsetDateTime.parse("2020-10-16T01:47:24.760Z");
                historyItemType = GETDescribeAlarmHistoryHistoryItemTypeEnum.STATE_UPDATE;
                maxRecords = 216550L;
                nextToken = "excepturi";
                scanBy = GETDescribeAlarmHistoryScanByEnum.TIMESTAMP_DESCENDING;
                startDate = OffsetDateTime.parse("2022-09-04T16:31:28.618Z");
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            GETDescribeAlarmHistoryResponse res = sdk.sdk.getDescribeAlarmHistory(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAlarms

<p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm name, the alarm state, or a prefix for any action.</p> <p>To use this operation and return information about composite alarms, you must be signed on with the <code>cloudwatch:DescribeAlarms</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarms</code> permission has a narrower scope.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAlarmsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAlarmsRequest;
import org.openapis.openapi.models.operations.GETDescribeAlarmsResponse;
import org.openapis.openapi.models.operations.GETDescribeAlarmsStateValueEnum;
import org.openapis.openapi.models.operations.GETDescribeAlarmsVersionEnum;
import org.openapis.openapi.models.shared.AlarmTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAlarmsRequest req = new GETDescribeAlarmsRequest(GETDescribeAlarmsActionEnum.DESCRIBE_ALARMS, GETDescribeAlarmsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                actionPrefix = "fuga";
                alarmNamePrefix = "in";
                alarmNames = new String[]{{
                    add("iste"),
                    add("iure"),
                }};
                alarmTypes = new org.openapis.openapi.models.shared.AlarmTypeEnum[]{{
                    add(AlarmTypeEnum.METRIC_ALARM),
                    add(AlarmTypeEnum.COMPOSITE_ALARM),
                    add(AlarmTypeEnum.COMPOSITE_ALARM),
                    add(AlarmTypeEnum.METRIC_ALARM),
                }};
                childrenOfAlarmName = "est";
                maxRecords = 653140L;
                nextToken = "laborum";
                parentsOfAlarmName = "dolores";
                stateValue = GETDescribeAlarmsStateValueEnum.OK;
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "nobis";
                xAmzDate = "enim";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "minima";
            }};            

            GETDescribeAlarmsResponse res = sdk.sdk.getDescribeAlarms(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeInsightRules

<p>Returns a list of all the Contributor Insights rules in your account.</p> <p>For more information about Contributor Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeInsightRulesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeInsightRulesRequest;
import org.openapis.openapi.models.operations.GETDescribeInsightRulesResponse;
import org.openapis.openapi.models.operations.GETDescribeInsightRulesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeInsightRulesRequest req = new GETDescribeInsightRulesRequest(GETDescribeInsightRulesActionEnum.DESCRIBE_INSIGHT_RULES, GETDescribeInsightRulesVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                maxResults = 38425L;
                nextToken = "iure";
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "sapiente";
                xAmzDate = "architecto";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "culpa";
            }};            

            GETDescribeInsightRulesResponse res = sdk.sdk.getDescribeInsightRules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDisableAlarmActions

Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDisableAlarmActionsActionEnum;
import org.openapis.openapi.models.operations.GETDisableAlarmActionsRequest;
import org.openapis.openapi.models.operations.GETDisableAlarmActionsResponse;
import org.openapis.openapi.models.operations.GETDisableAlarmActionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDisableAlarmActionsRequest req = new GETDisableAlarmActionsRequest(GETDisableAlarmActionsActionEnum.DISABLE_ALARM_ACTIONS,                 new String[]{{
                                add("mollitia"),
                                add("occaecati"),
                                add("numquam"),
                                add("commodi"),
                            }}, GETDisableAlarmActionsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
            }};            

            GETDisableAlarmActionsResponse res = sdk.sdk.getDisableAlarmActions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDisableInsightRules

Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDisableInsightRulesActionEnum;
import org.openapis.openapi.models.operations.GETDisableInsightRulesRequest;
import org.openapis.openapi.models.operations.GETDisableInsightRulesResponse;
import org.openapis.openapi.models.operations.GETDisableInsightRulesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDisableInsightRulesRequest req = new GETDisableInsightRulesRequest(GETDisableInsightRulesActionEnum.DISABLE_INSIGHT_RULES,                 new String[]{{
                                add("enim"),
                                add("odit"),
                                add("quo"),
                            }}, GETDisableInsightRulesVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "ipsam";
                xAmzDate = "id";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quasi";
            }};            

            GETDisableInsightRulesResponse res = sdk.sdk.getDisableInsightRules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnableAlarmActions

Enables the actions for the specified alarms.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETEnableAlarmActionsActionEnum;
import org.openapis.openapi.models.operations.GETEnableAlarmActionsRequest;
import org.openapis.openapi.models.operations.GETEnableAlarmActionsResponse;
import org.openapis.openapi.models.operations.GETEnableAlarmActionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETEnableAlarmActionsRequest req = new GETEnableAlarmActionsRequest(GETEnableAlarmActionsActionEnum.ENABLE_ALARM_ACTIONS,                 new String[]{{
                                add("laborum"),
                                add("quasi"),
                                add("reiciendis"),
                                add("voluptatibus"),
                            }}, GETEnableAlarmActionsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "praesentium";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "voluptate";
            }};            

            GETEnableAlarmActionsResponse res = sdk.sdk.getEnableAlarmActions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnableInsightRules

Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETEnableInsightRulesActionEnum;
import org.openapis.openapi.models.operations.GETEnableInsightRulesRequest;
import org.openapis.openapi.models.operations.GETEnableInsightRulesResponse;
import org.openapis.openapi.models.operations.GETEnableInsightRulesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETEnableInsightRulesRequest req = new GETEnableInsightRulesRequest(GETEnableInsightRulesActionEnum.ENABLE_INSIGHT_RULES,                 new String[]{{
                                add("doloremque"),
                            }}, GETEnableInsightRulesVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "ut";
                xAmzCredential = "maiores";
                xAmzDate = "dicta";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
            }};            

            GETEnableInsightRulesResponse res = sdk.sdk.getEnableInsightRules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETDashboard

<p>Displays the details of the dashboard that you specify.</p> <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create the copy.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETDashboardActionEnum;
import org.openapis.openapi.models.operations.GETGETDashboardRequest;
import org.openapis.openapi.models.operations.GETGETDashboardResponse;
import org.openapis.openapi.models.operations.GETGETDashboardVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETDashboardRequest req = new GETGETDashboardRequest(GETGETDashboardActionEnum.GET_DASHBOARD, "harum", GETGETDashboardVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "commodi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quidem";
            }};            

            GETGETDashboardResponse res = sdk.sdk.getGETDashboard(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETInsightRuleReport

<p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of contributors to the log group.</p> <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETInsightRuleReportActionEnum;
import org.openapis.openapi.models.operations.GETGETInsightRuleReportRequest;
import org.openapis.openapi.models.operations.GETGETInsightRuleReportResponse;
import org.openapis.openapi.models.operations.GETGETInsightRuleReportVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETInsightRuleReportRequest req = new GETGETInsightRuleReportRequest(GETGETInsightRuleReportActionEnum.GET_INSIGHT_RULE_REPORT, OffsetDateTime.parse("2021-04-09T11:24:10.949Z"), 265389L, "praesentium", OffsetDateTime.parse("2021-03-02T19:00:49.599Z"), GETGETInsightRuleReportVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                maxContributorCount = 93940L;
                metrics = new String[]{{
                    add("sint"),
                    add("veritatis"),
                    add("itaque"),
                    add("incidunt"),
                }};
                orderBy = "enim";
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "quibusdam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quibusdam";
            }};            

            GETGETInsightRuleReportResponse res = sdk.sdk.getGETInsightRuleReport(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETMetricStream

Returns information about the metric stream that you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETMetricStreamActionEnum;
import org.openapis.openapi.models.operations.GETGETMetricStreamRequest;
import org.openapis.openapi.models.operations.GETGETMetricStreamResponse;
import org.openapis.openapi.models.operations.GETGETMetricStreamVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETMetricStreamRequest req = new GETGETMetricStreamRequest(GETGETMetricStreamActionEnum.GET_METRIC_STREAM, "modi", GETGETMetricStreamVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "cupiditate";
                xAmzDate = "quos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "assumenda";
            }};            

            GETGETMetricStreamResponse res = sdk.sdk.getGETMetricStream(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETMetricWidgetImage

<p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard.</p> <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations.</p> <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p> <ul> <li> <p>As many as 100 metrics in the graph.</p> </li> <li> <p>Up to 100 KB uncompressed payload.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETMetricWidgetImageActionEnum;
import org.openapis.openapi.models.operations.GETGETMetricWidgetImageRequest;
import org.openapis.openapi.models.operations.GETGETMetricWidgetImageResponse;
import org.openapis.openapi.models.operations.GETGETMetricWidgetImageVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETMetricWidgetImageRequest req = new GETGETMetricWidgetImageRequest(GETGETMetricWidgetImageActionEnum.GET_METRIC_WIDGET_IMAGE, "alias", GETGETMetricWidgetImageVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                outputFormat = "fugit";
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "tempora";
                xAmzDate = "facilis";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "delectus";
            }};            

            GETGETMetricWidgetImageResponse res = sdk.sdk.getGETMetricWidgetImage(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListDashboards

<p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed. </p> <p> <code>ListDashboards</code> returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call <code>ListDashboards</code> again and include the value you received for <code>NextToken</code> in the first call, to receive the next 1000 results.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListDashboardsActionEnum;
import org.openapis.openapi.models.operations.GETListDashboardsRequest;
import org.openapis.openapi.models.operations.GETListDashboardsResponse;
import org.openapis.openapi.models.operations.GETListDashboardsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListDashboardsRequest req = new GETListDashboardsRequest(GETListDashboardsActionEnum.LIST_DASHBOARDS, GETListDashboardsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                dashboardNamePrefix = "non";
                nextToken = "eligendi";
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "provident";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "sint";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "dolor";
            }};            

            GETListDashboardsResponse res = sdk.sdk.getListDashboards(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListManagedInsightRules

 Returns a list that contains the number of managed Contributor Insights rules in your account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListManagedInsightRulesActionEnum;
import org.openapis.openapi.models.operations.GETListManagedInsightRulesRequest;
import org.openapis.openapi.models.operations.GETListManagedInsightRulesResponse;
import org.openapis.openapi.models.operations.GETListManagedInsightRulesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListManagedInsightRulesRequest req = new GETListManagedInsightRulesRequest(GETListManagedInsightRulesActionEnum.LIST_MANAGED_INSIGHT_RULES, "a", GETListManagedInsightRulesVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                maxResults = 680056L;
                nextToken = "in";
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "illum";
                xAmzCredential = "maiores";
                xAmzDate = "rerum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "cumque";
            }};            

            GETListManagedInsightRulesResponse res = sdk.sdk.getListManagedInsightRules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListMetricStreams

Returns a list of metric streams in this account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListMetricStreamsActionEnum;
import org.openapis.openapi.models.operations.GETListMetricStreamsRequest;
import org.openapis.openapi.models.operations.GETListMetricStreamsResponse;
import org.openapis.openapi.models.operations.GETListMetricStreamsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListMetricStreamsRequest req = new GETListMetricStreamsRequest(GETListMetricStreamsActionEnum.LIST_METRIC_STREAMS, GETListMetricStreamsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                maxResults = 411820L;
                nextToken = "aliquid";
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "non";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "delectus";
            }};            

            GETListMetricStreamsResponse res = sdk.sdk.getListMetricStreams(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListTagsForResource

Displays the tags associated with a CloudWatch resource. Currently, alarms and Contributor Insights rules support tagging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListTagsForResourceActionEnum;
import org.openapis.openapi.models.operations.GETListTagsForResourceRequest;
import org.openapis.openapi.models.operations.GETListTagsForResourceResponse;
import org.openapis.openapi.models.operations.GETListTagsForResourceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListTagsForResourceRequest req = new GETListTagsForResourceRequest(GETListTagsForResourceActionEnum.LIST_TAGS_FOR_RESOURCE, "provident", GETListTagsForResourceVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "id";
                xAmzCredential = "blanditiis";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "deserunt";
            }};            

            GETListTagsForResourceResponse res = sdk.sdk.getListTagsForResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPutDashboard

<p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here.</p> <p>All dashboards in your account are global, not region-specific.</p> <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p> <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the <code>DashboardBody</code> script or the CloudFormation template used to create the dashboard.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPutDashboardActionEnum;
import org.openapis.openapi.models.operations.GETPutDashboardRequest;
import org.openapis.openapi.models.operations.GETPutDashboardResponse;
import org.openapis.openapi.models.operations.GETPutDashboardVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPutDashboardRequest req = new GETPutDashboardRequest(GETPutDashboardActionEnum.PUT_DASHBOARD, "vel", "natus", GETPutDashboardVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
            }};            

            GETPutDashboardResponse res = sdk.sdk.getPutDashboard(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetAlarmState

<p>Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to <code>ALARM</code> sends an SNS message.</p> <p>Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p> <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It returns to its actual state only once any of its children alarms change state. It is also reevaluated if you update its configuration.</p> <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetAlarmStateActionEnum;
import org.openapis.openapi.models.operations.GETSetAlarmStateRequest;
import org.openapis.openapi.models.operations.GETSetAlarmStateResponse;
import org.openapis.openapi.models.operations.GETSetAlarmStateStateValueEnum;
import org.openapis.openapi.models.operations.GETSetAlarmStateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetAlarmStateRequest req = new GETSetAlarmStateRequest(GETSetAlarmStateActionEnum.SET_ALARM_STATE, "labore", "suscipit", GETSetAlarmStateStateValueEnum.ALARM, GETSetAlarmStateVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                stateReasonData = "nobis";
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "vero";
                xAmzCredential = "aspernatur";
                xAmzDate = "architecto";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "et";
                xAmzSignedHeaders = "excepturi";
            }};            

            GETSetAlarmStateResponse res = sdk.sdk.getSetAlarmState(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStartMetricStreams

Starts the streaming of metrics for one or more of your metric streams.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStartMetricStreamsActionEnum;
import org.openapis.openapi.models.operations.GETStartMetricStreamsRequest;
import org.openapis.openapi.models.operations.GETStartMetricStreamsResponse;
import org.openapis.openapi.models.operations.GETStartMetricStreamsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStartMetricStreamsRequest req = new GETStartMetricStreamsRequest(GETStartMetricStreamsActionEnum.START_METRIC_STREAMS,                 new String[]{{
                                add("quos"),
                                add("sint"),
                                add("accusantium"),
                            }}, GETStartMetricStreamsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "mollitia";
                xAmzDate = "ad";
                xAmzSecurityToken = "eum";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GETStartMetricStreamsResponse res = sdk.sdk.getStartMetricStreams(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStopMetricStreams

Stops the streaming of metrics for one or more of your metric streams.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStopMetricStreamsActionEnum;
import org.openapis.openapi.models.operations.GETStopMetricStreamsRequest;
import org.openapis.openapi.models.operations.GETStopMetricStreamsResponse;
import org.openapis.openapi.models.operations.GETStopMetricStreamsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETStopMetricStreamsRequest req = new GETStopMetricStreamsRequest(GETStopMetricStreamsActionEnum.STOP_METRIC_STREAMS,                 new String[]{{
                                add("quasi"),
                                add("iure"),
                            }}, GETStopMetricStreamsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "eius";
                xAmzDate = "maxime";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "in";
            }};            

            GETStopMetricStreamsResponse res = sdk.sdk.getStopMetricStreams(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUntagResource

Removes one or more tags from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUntagResourceActionEnum;
import org.openapis.openapi.models.operations.GETUntagResourceRequest;
import org.openapis.openapi.models.operations.GETUntagResourceResponse;
import org.openapis.openapi.models.operations.GETUntagResourceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUntagResourceRequest req = new GETUntagResourceRequest(GETUntagResourceActionEnum.UNTAG_RESOURCE, "architecto",                 new String[]{{
                                add("ullam"),
                                add("expedita"),
                                add("nihil"),
                                add("repellat"),
                            }}, GETUntagResourceVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "sed";
                xAmzCredential = "saepe";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "praesentium";
            }};            

            GETUntagResourceResponse res = sdk.sdk.getUntagResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteAlarms

<p>Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't delete two composite alarms with one operation.</p> <p> If you specify an incorrect alarm name or make any other error in the operation, no alarms are deleted. To confirm that alarms were deleted successfully, you can use the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> operation after using <code>DeleteAlarms</code>.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteAlarmsActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteAlarmsRequest;
import org.openapis.openapi.models.operations.POSTDeleteAlarmsResponse;
import org.openapis.openapi.models.operations.POSTDeleteAlarmsVersionEnum;
import org.openapis.openapi.models.shared.DeleteAlarmsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteAlarmsRequest req = new POSTDeleteAlarmsRequest(POSTDeleteAlarmsActionEnum.DELETE_ALARMS, POSTDeleteAlarmsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "magni".getBytes();
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
            }};            

            POSTDeleteAlarmsResponse res = sdk.sdk.postDeleteAlarms(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteAnomalyDetector

 Deletes the specified anomaly detection model from your account. For more information about how to delete an anomaly detection model, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Anomaly_Detection_Alarm.html#Delete_Anomaly_Detection_Model">Deleting an anomaly detection model</a> in the <i>CloudWatch User Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteAnomalyDetectorActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteAnomalyDetectorRequest;
import org.openapis.openapi.models.operations.POSTDeleteAnomalyDetectorResponse;
import org.openapis.openapi.models.operations.POSTDeleteAnomalyDetectorVersionEnum;
import org.openapis.openapi.models.shared.DeleteAnomalyDetectorInput;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricDataQuery;
import org.openapis.openapi.models.shared.MetricMathAnomalyDetector;
import org.openapis.openapi.models.shared.MetricStat;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SingleMetricAnomalyDetector;
import org.openapis.openapi.models.shared.StandardUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteAnomalyDetectorRequest req = new POSTDeleteAnomalyDetectorRequest(POSTDeleteAnomalyDetectorActionEnum.DELETE_ANOMALY_DETECTOR, POSTDeleteAnomalyDetectorVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "ea".getBytes();
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "ab";
                xAmzCredential = "maiores";
                xAmzDate = "quidem";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "autem";
            }};            

            POSTDeleteAnomalyDetectorResponse res = sdk.sdk.postDeleteAnomalyDetector(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDashboards

Deletes all dashboards that you specify. You can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDashboardsActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDashboardsRequest;
import org.openapis.openapi.models.operations.POSTDeleteDashboardsResponse;
import org.openapis.openapi.models.operations.POSTDeleteDashboardsVersionEnum;
import org.openapis.openapi.models.shared.DeleteDashboardsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDashboardsRequest req = new POSTDeleteDashboardsRequest(POSTDeleteDashboardsActionEnum.DELETE_DASHBOARDS, POSTDeleteDashboardsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "eaque".getBytes();
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "voluptatibus";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "aut";
            }};            

            POSTDeleteDashboardsResponse res = sdk.sdk.postDeleteDashboards(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteInsightRules

<p>Permanently deletes the specified Contributor Insights rules.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteInsightRulesActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteInsightRulesRequest;
import org.openapis.openapi.models.operations.POSTDeleteInsightRulesResponse;
import org.openapis.openapi.models.operations.POSTDeleteInsightRulesVersionEnum;
import org.openapis.openapi.models.shared.DeleteInsightRulesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteInsightRulesRequest req = new POSTDeleteInsightRulesRequest(POSTDeleteInsightRulesActionEnum.DELETE_INSIGHT_RULES, POSTDeleteInsightRulesVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "corporis".getBytes();
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "libero";
                xAmzCredential = "nobis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "quis";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "dignissimos";
            }};            

            POSTDeleteInsightRulesResponse res = sdk.sdk.postDeleteInsightRules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteMetricStream

Permanently deletes the metric stream that you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteMetricStreamActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteMetricStreamRequest;
import org.openapis.openapi.models.operations.POSTDeleteMetricStreamResponse;
import org.openapis.openapi.models.operations.POSTDeleteMetricStreamVersionEnum;
import org.openapis.openapi.models.shared.DeleteMetricStreamInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteMetricStreamRequest req = new POSTDeleteMetricStreamRequest(POSTDeleteMetricStreamActionEnum.DELETE_METRIC_STREAM, POSTDeleteMetricStreamVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "quis".getBytes();
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "eos";
                xAmzCredential = "perferendis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "minus";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "dolor";
            }};            

            POSTDeleteMetricStreamResponse res = sdk.sdk.postDeleteMetricStream(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAlarmHistory

<p>Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p> <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p> <p>To use this operation and return information about a composite alarm, you must be signed on with the <code>cloudwatch:DescribeAlarmHistory</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarmHistory</code> permission has a narrower scope.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAlarmHistoryActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAlarmHistoryRequest;
import org.openapis.openapi.models.operations.POSTDescribeAlarmHistoryResponse;
import org.openapis.openapi.models.operations.POSTDescribeAlarmHistoryVersionEnum;
import org.openapis.openapi.models.shared.AlarmTypeEnum;
import org.openapis.openapi.models.shared.DescribeAlarmHistoryInput;
import org.openapis.openapi.models.shared.HistoryItemTypeEnum;
import org.openapis.openapi.models.shared.ScanByEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAlarmHistoryRequest req = new POSTDescribeAlarmHistoryRequest(POSTDescribeAlarmHistoryActionEnum.DESCRIBE_ALARM_HISTORY, POSTDescribeAlarmHistoryVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                maxRecords = "nostrum";
                nextToken = "hic";
                requestBody = "recusandae".getBytes();
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "perspiciatis";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "porro";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "blanditiis";
            }};            

            POSTDescribeAlarmHistoryResponse res = sdk.sdk.postDescribeAlarmHistory(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAlarms

<p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm name, the alarm state, or a prefix for any action.</p> <p>To use this operation and return information about composite alarms, you must be signed on with the <code>cloudwatch:DescribeAlarms</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarms</code> permission has a narrower scope.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAlarmsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAlarmsRequest;
import org.openapis.openapi.models.operations.POSTDescribeAlarmsResponse;
import org.openapis.openapi.models.operations.POSTDescribeAlarmsVersionEnum;
import org.openapis.openapi.models.shared.AlarmTypeEnum;
import org.openapis.openapi.models.shared.DescribeAlarmsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StateValueEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAlarmsRequest req = new POSTDescribeAlarmsRequest(POSTDescribeAlarmsActionEnum.DESCRIBE_ALARMS, POSTDescribeAlarmsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                maxRecords = "eaque";
                nextToken = "occaecati";
                requestBody = "rerum".getBytes();
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "earum";
                xAmzDate = "modi";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            POSTDescribeAlarmsResponse res = sdk.sdk.postDescribeAlarms(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAlarmsForMetric

<p>Retrieves the alarms for the specified metric. To filter the results, specify a statistic, period, or unit.</p> <p>This operation retrieves only standard alarms that are based on the specified metric. It does not return alarms based on math expressions that use the specified metric, or composite alarms that use the specified metric.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAlarmsForMetricActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAlarmsForMetricRequest;
import org.openapis.openapi.models.operations.POSTDescribeAlarmsForMetricResponse;
import org.openapis.openapi.models.operations.POSTDescribeAlarmsForMetricVersionEnum;
import org.openapis.openapi.models.shared.DescribeAlarmsForMetricInput;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StandardUnitEnum;
import org.openapis.openapi.models.shared.StatisticEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAlarmsForMetricRequest req = new POSTDescribeAlarmsForMetricRequest(POSTDescribeAlarmsForMetricActionEnum.DESCRIBE_ALARMS_FOR_METRIC, POSTDescribeAlarmsForMetricVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "provident".getBytes();
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "libero";
                xAmzCredential = "delectus";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "quos";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "dolorem";
            }};            

            POSTDescribeAlarmsForMetricResponse res = sdk.sdk.postDescribeAlarmsForMetric(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAnomalyDetectors

Lists the anomaly detection models that you have created in your account. For single metric anomaly detectors, you can list all of the models in your account or filter the results to only the models that are related to a certain namespace, metric name, or metric dimension. For metric math anomaly detectors, you can list them by adding <code>METRIC_MATH</code> to the <code>AnomalyDetectorTypes</code> array. This will return all metric math anomaly detectors in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAnomalyDetectorsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAnomalyDetectorsRequest;
import org.openapis.openapi.models.operations.POSTDescribeAnomalyDetectorsResponse;
import org.openapis.openapi.models.operations.POSTDescribeAnomalyDetectorsVersionEnum;
import org.openapis.openapi.models.shared.AnomalyDetectorTypeEnum;
import org.openapis.openapi.models.shared.DescribeAnomalyDetectorsInput;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAnomalyDetectorsRequest req = new POSTDescribeAnomalyDetectorsRequest(POSTDescribeAnomalyDetectorsActionEnum.DESCRIBE_ANOMALY_DETECTORS, POSTDescribeAnomalyDetectorsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                maxResults = "dolor";
                nextToken = "qui";
                requestBody = "ipsum".getBytes();
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "cum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "amet";
            }};            

            POSTDescribeAnomalyDetectorsResponse res = sdk.sdk.postDescribeAnomalyDetectors(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeInsightRules

<p>Returns a list of all the Contributor Insights rules in your account.</p> <p>For more information about Contributor Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeInsightRulesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeInsightRulesRequest;
import org.openapis.openapi.models.operations.POSTDescribeInsightRulesResponse;
import org.openapis.openapi.models.operations.POSTDescribeInsightRulesVersionEnum;
import org.openapis.openapi.models.shared.DescribeInsightRulesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeInsightRulesRequest req = new POSTDescribeInsightRulesRequest(POSTDescribeInsightRulesActionEnum.DESCRIBE_INSIGHT_RULES, POSTDescribeInsightRulesVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                maxResults = "numquam";
                nextToken = "veritatis";
                requestBody = "ipsa".getBytes();
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "iure";
                xAmzCredential = "odio";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            POSTDescribeInsightRulesResponse res = sdk.sdk.postDescribeInsightRules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDisableAlarmActions

Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDisableAlarmActionsActionEnum;
import org.openapis.openapi.models.operations.POSTDisableAlarmActionsRequest;
import org.openapis.openapi.models.operations.POSTDisableAlarmActionsResponse;
import org.openapis.openapi.models.operations.POSTDisableAlarmActionsVersionEnum;
import org.openapis.openapi.models.shared.DisableAlarmActionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDisableAlarmActionsRequest req = new POSTDisableAlarmActionsRequest(POSTDisableAlarmActionsActionEnum.DISABLE_ALARM_ACTIONS, POSTDisableAlarmActionsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "natus".getBytes();
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "atque";
                xAmzCredential = "sit";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ab";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dolorum";
            }};            

            POSTDisableAlarmActionsResponse res = sdk.sdk.postDisableAlarmActions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDisableInsightRules

Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDisableInsightRulesActionEnum;
import org.openapis.openapi.models.operations.POSTDisableInsightRulesRequest;
import org.openapis.openapi.models.operations.POSTDisableInsightRulesResponse;
import org.openapis.openapi.models.operations.POSTDisableInsightRulesVersionEnum;
import org.openapis.openapi.models.shared.DisableInsightRulesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDisableInsightRulesRequest req = new POSTDisableInsightRulesRequest(POSTDisableInsightRulesActionEnum.DISABLE_INSIGHT_RULES, POSTDisableInsightRulesVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "voluptate".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "omnis";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "nihil";
            }};            

            POSTDisableInsightRulesResponse res = sdk.sdk.postDisableInsightRules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEnableAlarmActions

Enables the actions for the specified alarms.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTEnableAlarmActionsActionEnum;
import org.openapis.openapi.models.operations.POSTEnableAlarmActionsRequest;
import org.openapis.openapi.models.operations.POSTEnableAlarmActionsResponse;
import org.openapis.openapi.models.operations.POSTEnableAlarmActionsVersionEnum;
import org.openapis.openapi.models.shared.EnableAlarmActionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTEnableAlarmActionsRequest req = new POSTEnableAlarmActionsRequest(POSTEnableAlarmActionsActionEnum.ENABLE_ALARM_ACTIONS, POSTEnableAlarmActionsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "voluptate".getBytes();
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "eius";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "optio";
            }};            

            POSTEnableAlarmActionsResponse res = sdk.sdk.postEnableAlarmActions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEnableInsightRules

Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTEnableInsightRulesActionEnum;
import org.openapis.openapi.models.operations.POSTEnableInsightRulesRequest;
import org.openapis.openapi.models.operations.POSTEnableInsightRulesResponse;
import org.openapis.openapi.models.operations.POSTEnableInsightRulesVersionEnum;
import org.openapis.openapi.models.shared.EnableInsightRulesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTEnableInsightRulesRequest req = new POSTEnableInsightRulesRequest(POSTEnableInsightRulesActionEnum.ENABLE_INSIGHT_RULES, POSTEnableInsightRulesVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "ad".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "deserunt";
                xAmzDate = "provident";
                xAmzSecurityToken = "minima";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "totam";
            }};            

            POSTEnableInsightRulesResponse res = sdk.sdk.postEnableInsightRules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetDashboard

<p>Displays the details of the dashboard that you specify.</p> <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create the copy.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetDashboardActionEnum;
import org.openapis.openapi.models.operations.POSTGetDashboardRequest;
import org.openapis.openapi.models.operations.POSTGetDashboardResponse;
import org.openapis.openapi.models.operations.POSTGetDashboardVersionEnum;
import org.openapis.openapi.models.shared.GetDashboardInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetDashboardRequest req = new POSTGetDashboardRequest(POSTGetDashboardActionEnum.GET_DASHBOARD, POSTGetDashboardVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "alias".getBytes();
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "tempora";
                xAmzDate = "vel";
                xAmzSecurityToken = "quod";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "qui";
            }};            

            POSTGetDashboardResponse res = sdk.sdk.postGetDashboard(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetInsightRuleReport

<p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of contributors to the log group.</p> <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetInsightRuleReportActionEnum;
import org.openapis.openapi.models.operations.POSTGetInsightRuleReportRequest;
import org.openapis.openapi.models.operations.POSTGetInsightRuleReportResponse;
import org.openapis.openapi.models.operations.POSTGetInsightRuleReportVersionEnum;
import org.openapis.openapi.models.shared.GetInsightRuleReportInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetInsightRuleReportRequest req = new POSTGetInsightRuleReportRequest(POSTGetInsightRuleReportActionEnum.GET_INSIGHT_RULE_REPORT, POSTGetInsightRuleReportVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "a".getBytes();
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "harum";
                xAmzCredential = "iusto";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "amet";
            }};            

            POSTGetInsightRuleReportResponse res = sdk.sdk.postGetInsightRuleReport(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetMetricData

<p>You can use the <code>GetMetricData</code> API to retrieve CloudWatch metric values. The operation can also include a CloudWatch Metrics Insights query, and one or more metric math functions.</p> <p>A <code>GetMetricData</code> operation that does not include a query can retrieve as many as 500 different metrics in a single request, with a total of as many as 100,800 data points. You can also optionally perform metric math expressions on the values of the returned statistics, to create new time series that represent new insights into your data. For example, using Lambda metrics, you could divide the Errors metric by the Invocations metric to get an error rate time series. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>If you include a Metrics Insights query, each <code>GetMetricData</code> operation can include only one query. But the same <code>GetMetricData</code> operation can also retrieve other metrics. Metrics Insights queries can query only the most recent three hours of metric data. For more information about Metrics Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/query_with_cloudwatch-metrics-insights.html">Query your metrics with CloudWatch Metrics Insights</a>.</p> <p>Calls to the <code>GetMetricData</code> API have a different pricing structure than calls to <code>GetMetricStatistics</code>. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>If you omit <code>Unit</code> in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p> <p> <b>Using Metrics Insights queries with metric math</b> </p> <p>You can't mix a Metric Insights query and metric math syntax in the same expression, but you can reference results from a Metrics Insights query within other Metric math expressions. A Metrics Insights query without a <b>GROUP BY</b> clause returns a single time-series (TS), and can be used as input for a metric math expression that expects a single time series. A Metrics Insights query with a <b>GROUP BY</b> clause returns an array of time-series (TS[]), and can be used as input for a metric math expression that expects an array of time series. </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetMetricDataActionEnum;
import org.openapis.openapi.models.operations.POSTGetMetricDataRequest;
import org.openapis.openapi.models.operations.POSTGetMetricDataResponse;
import org.openapis.openapi.models.operations.POSTGetMetricDataVersionEnum;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.GetMetricDataInput;
import org.openapis.openapi.models.shared.LabelOptions;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricDataQuery;
import org.openapis.openapi.models.shared.MetricStat;
import org.openapis.openapi.models.shared.ScanByEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StandardUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetMetricDataRequest req = new POSTGetMetricDataRequest(POSTGetMetricDataActionEnum.GET_METRIC_DATA, POSTGetMetricDataVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                maxDatapoints = "accusamus";
                nextToken = "numquam";
                requestBody = "enim".getBytes();
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "totam";
                xAmzDate = "nihil";
                xAmzSecurityToken = "sit";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "neque";
            }};            

            POSTGetMetricDataResponse res = sdk.sdk.postGetMetricData(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetMetricStatistics

<p>Gets statistics for the specified metric.</p> <p>The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. Data points are not returned in chronological order.</p> <p>CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The SampleCount value of the statistic set is 1.</p> </li> <li> <p>The Min and the Max values of the statistic set are equal.</p> </li> </ul> <p>Percentile statistics are not available for metrics when any of the metric values are negative numbers.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016.</p> <p>For information about metrics and dimensions supported by Amazon Web Services services, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html">Amazon CloudWatch Metrics and Dimensions Reference</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetMetricStatisticsActionEnum;
import org.openapis.openapi.models.operations.POSTGetMetricStatisticsRequest;
import org.openapis.openapi.models.operations.POSTGetMetricStatisticsResponse;
import org.openapis.openapi.models.operations.POSTGetMetricStatisticsVersionEnum;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.GetMetricStatisticsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StandardUnitEnum;
import org.openapis.openapi.models.shared.StatisticEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetMetricStatisticsRequest req = new POSTGetMetricStatisticsRequest(POSTGetMetricStatisticsActionEnum.GET_METRIC_STATISTICS, POSTGetMetricStatisticsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "vel".getBytes();
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
            }};            

            POSTGetMetricStatisticsResponse res = sdk.sdk.postGetMetricStatistics(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetMetricStream

Returns information about the metric stream that you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetMetricStreamActionEnum;
import org.openapis.openapi.models.operations.POSTGetMetricStreamRequest;
import org.openapis.openapi.models.operations.POSTGetMetricStreamResponse;
import org.openapis.openapi.models.operations.POSTGetMetricStreamVersionEnum;
import org.openapis.openapi.models.shared.GetMetricStreamInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetMetricStreamRequest req = new POSTGetMetricStreamRequest(POSTGetMetricStreamActionEnum.GET_METRIC_STREAM, POSTGetMetricStreamVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "maxime".getBytes();
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dicta";
                xAmzDate = "laborum";
                xAmzSecurityToken = "totam";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "aspernatur";
            }};            

            POSTGetMetricStreamResponse res = sdk.sdk.postGetMetricStream(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetMetricWidgetImage

<p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard.</p> <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations.</p> <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p> <ul> <li> <p>As many as 100 metrics in the graph.</p> </li> <li> <p>Up to 100 KB uncompressed payload.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetMetricWidgetImageActionEnum;
import org.openapis.openapi.models.operations.POSTGetMetricWidgetImageRequest;
import org.openapis.openapi.models.operations.POSTGetMetricWidgetImageResponse;
import org.openapis.openapi.models.operations.POSTGetMetricWidgetImageVersionEnum;
import org.openapis.openapi.models.shared.GetMetricWidgetImageInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetMetricWidgetImageRequest req = new POSTGetMetricWidgetImageRequest(POSTGetMetricWidgetImageActionEnum.GET_METRIC_WIDGET_IMAGE, POSTGetMetricWidgetImageVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "distinctio".getBytes();
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "quam";
                xAmzDate = "molestias";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "neque";
            }};            

            POSTGetMetricWidgetImageResponse res = sdk.sdk.postGetMetricWidgetImage(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListDashboards

<p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed. </p> <p> <code>ListDashboards</code> returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call <code>ListDashboards</code> again and include the value you received for <code>NextToken</code> in the first call, to receive the next 1000 results.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListDashboardsActionEnum;
import org.openapis.openapi.models.operations.POSTListDashboardsRequest;
import org.openapis.openapi.models.operations.POSTListDashboardsResponse;
import org.openapis.openapi.models.operations.POSTListDashboardsVersionEnum;
import org.openapis.openapi.models.shared.ListDashboardsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListDashboardsRequest req = new POSTListDashboardsRequest(POSTListDashboardsActionEnum.LIST_DASHBOARDS, POSTListDashboardsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                nextToken = "magni";
                requestBody = "odio".getBytes();
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "nam";
                xAmzDate = "hic";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "soluta";
            }};            

            POSTListDashboardsResponse res = sdk.sdk.postListDashboards(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListManagedInsightRules

 Returns a list that contains the number of managed Contributor Insights rules in your account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListManagedInsightRulesActionEnum;
import org.openapis.openapi.models.operations.POSTListManagedInsightRulesRequest;
import org.openapis.openapi.models.operations.POSTListManagedInsightRulesResponse;
import org.openapis.openapi.models.operations.POSTListManagedInsightRulesVersionEnum;
import org.openapis.openapi.models.shared.ListManagedInsightRulesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListManagedInsightRulesRequest req = new POSTListManagedInsightRulesRequest(POSTListManagedInsightRulesActionEnum.LIST_MANAGED_INSIGHT_RULES, POSTListManagedInsightRulesVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                maxResults = "et";
                nextToken = "saepe";
                requestBody = "ipsum".getBytes();
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quos";
                xAmzDate = "tempore";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "delectus";
            }};            

            POSTListManagedInsightRulesResponse res = sdk.sdk.postListManagedInsightRules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListMetricStreams

Returns a list of metric streams in this account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListMetricStreamsActionEnum;
import org.openapis.openapi.models.operations.POSTListMetricStreamsRequest;
import org.openapis.openapi.models.operations.POSTListMetricStreamsResponse;
import org.openapis.openapi.models.operations.POSTListMetricStreamsVersionEnum;
import org.openapis.openapi.models.shared.ListMetricStreamsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListMetricStreamsRequest req = new POSTListMetricStreamsRequest(POSTListMetricStreamsActionEnum.LIST_METRIC_STREAMS, POSTListMetricStreamsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                maxResults = "dolore";
                nextToken = "labore";
                requestBody = "adipisci".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "quae";
                xAmzDate = "aut";
                xAmzSecurityToken = "quas";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "consequatur";
            }};            

            POSTListMetricStreamsResponse res = sdk.sdk.postListMetricStreams(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListMetrics

<p>List the specified metrics. You can use the returned metrics with <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> to get statistical data.</p> <p>Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls.</p> <p>After you create a metric, allow up to 15 minutes for the metric to appear. To see metric statistics sooner, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view metrics from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p> <p> <code>ListMetrics</code> doesn't return information about metrics if those metrics haven't reported data in the past two weeks. To retrieve those metrics, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListMetricsActionEnum;
import org.openapis.openapi.models.operations.POSTListMetricsRequest;
import org.openapis.openapi.models.operations.POSTListMetricsResponse;
import org.openapis.openapi.models.operations.POSTListMetricsVersionEnum;
import org.openapis.openapi.models.shared.DimensionFilter;
import org.openapis.openapi.models.shared.ListMetricsInput;
import org.openapis.openapi.models.shared.RecentlyActiveEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListMetricsRequest req = new POSTListMetricsRequest(POSTListMetricsActionEnum.LIST_METRICS, POSTListMetricsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                nextToken = "repellendus";
                requestBody = "porro".getBytes();
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "ut";
                xAmzCredential = "facilis";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "qui";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "laudantium";
            }};            

            POSTListMetricsResponse res = sdk.sdk.postListMetrics(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListTagsForResource

Displays the tags associated with a CloudWatch resource. Currently, alarms and Contributor Insights rules support tagging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListTagsForResourceActionEnum;
import org.openapis.openapi.models.operations.POSTListTagsForResourceRequest;
import org.openapis.openapi.models.operations.POSTListTagsForResourceResponse;
import org.openapis.openapi.models.operations.POSTListTagsForResourceVersionEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListTagsForResourceRequest req = new POSTListTagsForResourceRequest(POSTListTagsForResourceActionEnum.LIST_TAGS_FOR_RESOURCE, POSTListTagsForResourceVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "occaecati".getBytes();
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "vero";
                xAmzDate = "omnis";
                xAmzSecurityToken = "quis";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "delectus";
            }};            

            POSTListTagsForResourceResponse res = sdk.sdk.postListTagsForResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutAnomalyDetector

<p>Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutAnomalyDetectorActionEnum;
import org.openapis.openapi.models.operations.POSTPutAnomalyDetectorRequest;
import org.openapis.openapi.models.operations.POSTPutAnomalyDetectorResponse;
import org.openapis.openapi.models.operations.POSTPutAnomalyDetectorVersionEnum;
import org.openapis.openapi.models.shared.AnomalyDetectorConfiguration;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricDataQuery;
import org.openapis.openapi.models.shared.MetricMathAnomalyDetector;
import org.openapis.openapi.models.shared.MetricStat;
import org.openapis.openapi.models.shared.PutAnomalyDetectorInput;
import org.openapis.openapi.models.shared.Range;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SingleMetricAnomalyDetector;
import org.openapis.openapi.models.shared.StandardUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutAnomalyDetectorRequest req = new POSTPutAnomalyDetectorRequest(POSTPutAnomalyDetectorActionEnum.PUT_ANOMALY_DETECTOR, POSTPutAnomalyDetectorVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "consectetur".getBytes();
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "dignissimos";
                xAmzDate = "hic";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "odio";
            }};            

            POSTPutAnomalyDetectorResponse res = sdk.sdk.postPutAnomalyDetector(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutCompositeAlarm

<p>Creates or updates a <i>composite alarm</i>. When you create a composite alarm, you specify a rule expression for the alarm that takes into account the alarm states of other alarms that you have created. The composite alarm goes into ALARM state only if all conditions of the rule are met.</p> <p>The alarms specified in a composite alarm's rule expression can include metric alarms and other composite alarms. The rule expression of a composite alarm can include as many as 100 underlying alarms. Any single alarm can be included in the rule expressions of as many as 150 composite alarms.</p> <p>Using composite alarms can reduce alarm noise. You can create multiple metric alarms, and also create a composite alarm and set up alerts only for the composite alarm. For example, you could create a composite alarm that goes into ALARM state only when more than one of the underlying metric alarms are in ALARM state.</p> <p>Currently, the only alarm actions that can be taken by composite alarms are notifying SNS topics.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. For a composite alarm, this initial time after creation is the only time that the alarm can be in <code>INSUFFICIENT_DATA</code> state.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>To use this operation, you must be signed on with the <code>cloudwatch:PutCompositeAlarm</code> permission that is scoped to <code>*</code>. You can't create a composite alarms if your <code>cloudwatch:PutCompositeAlarm</code> permission has a narrower scope.</p> <p>If you are an IAM user, you must have <code>iam:CreateServiceLinkedRole</code> to create a composite alarm that has Systems Manager OpsItem actions.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutCompositeAlarmActionEnum;
import org.openapis.openapi.models.operations.POSTPutCompositeAlarmRequest;
import org.openapis.openapi.models.operations.POSTPutCompositeAlarmResponse;
import org.openapis.openapi.models.operations.POSTPutCompositeAlarmVersionEnum;
import org.openapis.openapi.models.shared.PutCompositeAlarmInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutCompositeAlarmRequest req = new POSTPutCompositeAlarmRequest(POSTPutCompositeAlarmActionEnum.PUT_COMPOSITE_ALARM, POSTPutCompositeAlarmVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "facilis".getBytes();
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "dolore";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "illum";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "natus";
            }};            

            POSTPutCompositeAlarmResponse res = sdk.sdk.postPutCompositeAlarm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutDashboard

<p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here.</p> <p>All dashboards in your account are global, not region-specific.</p> <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p> <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the <code>DashboardBody</code> script or the CloudFormation template used to create the dashboard.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutDashboardActionEnum;
import org.openapis.openapi.models.operations.POSTPutDashboardRequest;
import org.openapis.openapi.models.operations.POSTPutDashboardResponse;
import org.openapis.openapi.models.operations.POSTPutDashboardVersionEnum;
import org.openapis.openapi.models.shared.PutDashboardInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutDashboardRequest req = new POSTPutDashboardRequest(POSTPutDashboardActionEnum.PUT_DASHBOARD, POSTPutDashboardVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "aut".getBytes();
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nulla";
                xAmzDate = "fugit";
                xAmzSecurityToken = "porro";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "doloribus";
            }};            

            POSTPutDashboardResponse res = sdk.sdk.postPutDashboard(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutInsightRule

<p>Creates a Contributor Insights rule. Rules evaluate log events in a CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutInsightRuleActionEnum;
import org.openapis.openapi.models.operations.POSTPutInsightRuleRequest;
import org.openapis.openapi.models.operations.POSTPutInsightRuleResponse;
import org.openapis.openapi.models.operations.POSTPutInsightRuleVersionEnum;
import org.openapis.openapi.models.shared.PutInsightRuleInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutInsightRuleRequest req = new POSTPutInsightRuleRequest(POSTPutInsightRuleActionEnum.PUT_INSIGHT_RULE, POSTPutInsightRuleVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "eligendi".getBytes();
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "alias";
                xAmzCredential = "officia";
                xAmzDate = "tempora";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "aspernatur";
            }};            

            POSTPutInsightRuleResponse res = sdk.sdk.postPutInsightRule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutManagedInsightRules

 Creates a managed Contributor Insights rule for a specified Amazon Web Services resource. When you enable a managed rule, you create a Contributor Insights rule that collects data from Amazon Web Services services. You cannot edit these rules with <code>PutInsightRule</code>. The rules can be enabled, disabled, and deleted using <code>EnableInsightRules</code>, <code>DisableInsightRules</code>, and <code>DeleteInsightRules</code>. If a previously created managed rule is currently disabled, a subsequent call to this API will re-enable it. Use <code>ListManagedInsightRules</code> to describe all available rules. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutManagedInsightRulesActionEnum;
import org.openapis.openapi.models.operations.POSTPutManagedInsightRulesRequest;
import org.openapis.openapi.models.operations.POSTPutManagedInsightRulesResponse;
import org.openapis.openapi.models.operations.POSTPutManagedInsightRulesVersionEnum;
import org.openapis.openapi.models.shared.ManagedRule;
import org.openapis.openapi.models.shared.PutManagedInsightRulesInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutManagedInsightRulesRequest req = new POSTPutManagedInsightRulesRequest(POSTPutManagedInsightRulesActionEnum.PUT_MANAGED_INSIGHT_RULES, POSTPutManagedInsightRulesVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "possimus".getBytes();
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "ex";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "maiores";
            }};            

            POSTPutManagedInsightRulesResponse res = sdk.sdk.postPutManagedInsightRules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutMetricAlarm

<p>Creates or updates an alarm and associates it with the specified metric, metric math expression, anomaly detection model, or Metrics Insights query. For more information about using a Metrics Insights query for an alarm, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Metrics_Insights_Alarm.html">Create alarms on Metrics Insights queries</a>.</p> <p>Alarms based on anomaly detection models cannot have Auto Scaling actions.</p> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations:</p> <ul> <li> <p>The <code>iam:CreateServiceLinkedRole</code> permission for all alarms with EC2 actions</p> </li> <li> <p>The <code>iam:CreateServiceLinkedRole</code> permissions to create an alarm with Systems Manager OpsItem or response plan actions.</p> </li> </ul> <p>The first time you create an alarm in the Amazon Web Services Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked roles are called <code>AWSServiceRoleForCloudWatchEvents</code> and <code>AWSServiceRoleForCloudWatchAlarms_ActionSSM</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Amazon Web Services service-linked role</a>.</p> <p> <b>Cross-account alarms</b> </p> <p>You can set an alarm on metrics in the current account, or in another account. To create a cross-account alarm that watches a metric in a different account, you must have completed the following pre-requisites:</p> <ul> <li> <p>The account where the metrics are located (the <i>sharing account</i>) must already have a sharing role named <b>CloudWatch-CrossAccountSharingRole</b>. If it does not already have this role, you must create it using the instructions in <b>Set up a sharing account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region"> Cross-account cross-Region CloudWatch console</a>. The policy for that role must grant access to the ID of the account where you are creating the alarm. </p> </li> <li> <p>The account where you are creating the alarm (the <i>monitoring account</i>) must already have a service-linked role named <b>AWSServiceRoleForCloudWatchCrossAccount</b> to allow CloudWatch to assume the sharing role in the sharing account. If it does not, you must create it following the directions in <b>Set up a monitoring account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region"> Cross-account cross-Region CloudWatch console</a>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutMetricAlarmActionEnum;
import org.openapis.openapi.models.operations.POSTPutMetricAlarmRequest;
import org.openapis.openapi.models.operations.POSTPutMetricAlarmResponse;
import org.openapis.openapi.models.operations.POSTPutMetricAlarmVersionEnum;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricDataQuery;
import org.openapis.openapi.models.shared.MetricStat;
import org.openapis.openapi.models.shared.PutMetricAlarmInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StandardUnitEnum;
import org.openapis.openapi.models.shared.StatisticEnum;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutMetricAlarmRequest req = new POSTPutMetricAlarmRequest(POSTPutMetricAlarmActionEnum.PUT_METRIC_ALARM, POSTPutMetricAlarmVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "ex".getBytes();
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "voluptatibus";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "saepe";
            }};            

            POSTPutMetricAlarmResponse res = sdk.sdk.postPutMetricAlarm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutMetricData

<p>Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p> <p>You can publish either individual data points in the <code>Value</code> field, or arrays of values and the number of times each value occurred during the period by using the <code>Values</code> and <code>Counts</code> fields in the <code>MetricDatum</code> structure. Using the <code>Values</code> and <code>Counts</code> method enables you to publish up to 150 values per metric with one <code>PutMetricData</code> request, and supports retrieving percentile statistics on this data.</p> <p>Each <code>PutMetricData</code> request is limited to 1 MB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 1000 different metrics.</p> <p>Although the <code>Value</code> parameter accepts numbers of type <code>Double</code>, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p> <p>You can use up to 30 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>You specify the time stamp to be associated with each data point. You can specify time stamps that are as much as two weeks before the current date, and as much as 2 hours after the current day and time.</p> <p>Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> from the time they are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available for for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The <code>SampleCount</code> value of the statistic set is 1 and <code>Min</code>, <code>Max</code>, and <code>Sum</code> are all equal.</p> </li> <li> <p>The <code>Min</code> and <code>Max</code> are equal, and <code>Sum</code> is equal to <code>Min</code> multiplied by <code>SampleCount</code>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutMetricDataActionEnum;
import org.openapis.openapi.models.operations.POSTPutMetricDataRequest;
import org.openapis.openapi.models.operations.POSTPutMetricDataResponse;
import org.openapis.openapi.models.operations.POSTPutMetricDataVersionEnum;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.MetricDatum;
import org.openapis.openapi.models.shared.PutMetricDataInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StandardUnitEnum;
import org.openapis.openapi.models.shared.StatisticSet;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutMetricDataRequest req = new POSTPutMetricDataRequest(POSTPutMetricDataActionEnum.PUT_METRIC_DATA, POSTPutMetricDataVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "impedit".getBytes();
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "aliquid";
                xAmzDate = "inventore";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "quo";
            }};            

            POSTPutMetricDataResponse res = sdk.sdk.postPutMetricData(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutMetricStream

<p>Creates or updates a metric stream. Metric streams can automatically stream CloudWatch metrics to Amazon Web Services destinations, including Amazon S3, and to many third-party solutions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html"> Using Metric Streams</a>.</p> <p>To create a metric stream, you must be signed in to an account that has the <code>iam:PassRole</code> permission and either the <code>CloudWatchFullAccess</code> policy or the <code>cloudwatch:PutMetricStream</code> permission.</p> <p>When you create or update a metric stream, you choose one of the following:</p> <ul> <li> <p>Stream metrics from all metric namespaces in the account.</p> </li> <li> <p>Stream metrics from all metric namespaces in the account, except for the namespaces that you list in <code>ExcludeFilters</code>.</p> </li> <li> <p>Stream metrics from only the metric namespaces that you list in <code>IncludeFilters</code>.</p> </li> </ul> <p>By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>, <code>SUM</code>, and <code>SAMPLECOUNT</code> statistics for each metric that is streamed. You can use the <code>StatisticsConfigurations</code> parameter to have the metric stream send additional statistics in the stream. Streaming additional statistics incurs additional costs. For more information, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>. </p> <p>When you use <code>PutMetricStream</code> to create a new metric stream, the stream is created in the <code>running</code> state. If you use it to update an existing stream, the state of the stream is not changed.</p> <p>If you are using CloudWatch cross-account observability and you create a metric stream in a monitoring account, you can choose whether to include metrics from source accounts in the stream. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutMetricStreamActionEnum;
import org.openapis.openapi.models.operations.POSTPutMetricStreamRequest;
import org.openapis.openapi.models.operations.POSTPutMetricStreamResponse;
import org.openapis.openapi.models.operations.POSTPutMetricStreamVersionEnum;
import org.openapis.openapi.models.shared.MetricStreamFilter;
import org.openapis.openapi.models.shared.MetricStreamOutputFormatEnum;
import org.openapis.openapi.models.shared.MetricStreamStatisticsConfiguration;
import org.openapis.openapi.models.shared.MetricStreamStatisticsMetric;
import org.openapis.openapi.models.shared.PutMetricStreamInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutMetricStreamRequest req = new POSTPutMetricStreamRequest(POSTPutMetricStreamActionEnum.PUT_METRIC_STREAM, POSTPutMetricStreamVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "recusandae".getBytes();
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "minima";
                xAmzCredential = "eaque";
                xAmzDate = "a";
                xAmzSecurityToken = "libero";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "aut";
            }};            

            POSTPutMetricStreamResponse res = sdk.sdk.postPutMetricStream(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetAlarmState

<p>Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to <code>ALARM</code> sends an SNS message.</p> <p>Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p> <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It returns to its actual state only once any of its children alarms change state. It is also reevaluated if you update its configuration.</p> <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetAlarmStateActionEnum;
import org.openapis.openapi.models.operations.POSTSetAlarmStateRequest;
import org.openapis.openapi.models.operations.POSTSetAlarmStateResponse;
import org.openapis.openapi.models.operations.POSTSetAlarmStateVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetAlarmStateInput;
import org.openapis.openapi.models.shared.StateValueEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetAlarmStateRequest req = new POSTSetAlarmStateRequest(POSTSetAlarmStateActionEnum.SET_ALARM_STATE, POSTSetAlarmStateVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "impedit".getBytes();
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "accusamus";
                xAmzDate = "inventore";
                xAmzSecurityToken = "non";
                xAmzSignature = "et";
                xAmzSignedHeaders = "dolorum";
            }};            

            POSTSetAlarmStateResponse res = sdk.sdk.postSetAlarmState(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStartMetricStreams

Starts the streaming of metrics for one or more of your metric streams.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTStartMetricStreamsActionEnum;
import org.openapis.openapi.models.operations.POSTStartMetricStreamsRequest;
import org.openapis.openapi.models.operations.POSTStartMetricStreamsResponse;
import org.openapis.openapi.models.operations.POSTStartMetricStreamsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartMetricStreamsInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStartMetricStreamsRequest req = new POSTStartMetricStreamsRequest(POSTStartMetricStreamsActionEnum.START_METRIC_STREAMS, POSTStartMetricStreamsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "placeat".getBytes();
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "eum";
                xAmzCredential = "autem";
                xAmzDate = "nobis";
                xAmzSecurityToken = "quas";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "nulla";
            }};            

            POSTStartMetricStreamsResponse res = sdk.sdk.postStartMetricStreams(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStopMetricStreams

Stops the streaming of metrics for one or more of your metric streams.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTStopMetricStreamsActionEnum;
import org.openapis.openapi.models.operations.POSTStopMetricStreamsRequest;
import org.openapis.openapi.models.operations.POSTStopMetricStreamsResponse;
import org.openapis.openapi.models.operations.POSTStopMetricStreamsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopMetricStreamsInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTStopMetricStreamsRequest req = new POSTStopMetricStreamsRequest(POSTStopMetricStreamsActionEnum.STOP_METRIC_STREAMS, POSTStopMetricStreamsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "libero".getBytes();
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "numquam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "provident";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "molestiae";
            }};            

            POSTStopMetricStreamsResponse res = sdk.sdk.postStopMetricStreams(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTagResource

<p>Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Currently, the only CloudWatch resources that can be tagged are alarms and Contributor Insights rules.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with an alarm that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a CloudWatch resource.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTTagResourceActionEnum;
import org.openapis.openapi.models.operations.POSTTagResourceRequest;
import org.openapis.openapi.models.operations.POSTTagResourceResponse;
import org.openapis.openapi.models.operations.POSTTagResourceVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTTagResourceRequest req = new POSTTagResourceRequest(POSTTagResourceActionEnum.TAG_RESOURCE, POSTTagResourceVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "odio".getBytes();
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "esse";
                xAmzCredential = "esse";
                xAmzDate = "rem";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "quidem";
            }};            

            POSTTagResourceResponse res = sdk.sdk.postTagResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUntagResource

Removes one or more tags from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUntagResourceActionEnum;
import org.openapis.openapi.models.operations.POSTUntagResourceRequest;
import org.openapis.openapi.models.operations.POSTUntagResourceResponse;
import org.openapis.openapi.models.operations.POSTUntagResourceVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUntagResourceRequest req = new POSTUntagResourceRequest(POSTUntagResourceActionEnum.UNTAG_RESOURCE, POSTUntagResourceVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                requestBody = "ut".getBytes();
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "assumenda";
                xAmzDate = "eos";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "veritatis";
            }};            

            POSTUntagResourceResponse res = sdk.sdk.postUntagResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
