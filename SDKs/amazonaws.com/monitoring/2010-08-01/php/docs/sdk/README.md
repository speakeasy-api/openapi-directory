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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAlarmsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAlarmsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAlarmsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteAlarmsRequest();
    $request->action = GETDeleteAlarmsActionEnum::DELETE_ALARMS;
    $request->alarmNames = [
        'iure',
        'magnam',
    ];
    $request->version = GETDeleteAlarmsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->sdk->getDeleteAlarms($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDashboards

Deletes all dashboards that you specify. You can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDashboardsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDashboardsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDashboardsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDashboardsRequest();
    $request->action = GETDeleteDashboardsActionEnum::DELETE_DASHBOARDS;
    $request->dashboardNames = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->version = GETDeleteDashboardsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getDeleteDashboards($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteInsightRules

<p>Permanently deletes the specified Contributor Insights rules.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteInsightRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteInsightRulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteInsightRulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteInsightRulesRequest();
    $request->action = GETDeleteInsightRulesActionEnum::DELETE_INSIGHT_RULES;
    $request->ruleNames = [
        'repellendus',
        'sapiente',
    ];
    $request->version = GETDeleteInsightRulesVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->getDeleteInsightRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteMetricStream

Permanently deletes the metric stream that you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteMetricStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteMetricStreamActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteMetricStreamVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteMetricStreamRequest();
    $request->action = GETDeleteMetricStreamActionEnum::DELETE_METRIC_STREAM;
    $request->name = 'Erik Lebsack';
    $request->version = GETDeleteMetricStreamVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->getDeleteMetricStream($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAlarmHistory

<p>Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p> <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p> <p>To use this operation and return information about a composite alarm, you must be signed on with the <code>cloudwatch:DescribeAlarmHistory</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarmHistory</code> permission has a narrower scope.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAlarmHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAlarmHistoryActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AlarmTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAlarmHistoryHistoryItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAlarmHistoryScanByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAlarmHistoryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeAlarmHistoryRequest();
    $request->action = GETDescribeAlarmHistoryActionEnum::DESCRIBE_ALARM_HISTORY;
    $request->alarmName = 'optio';
    $request->alarmTypes = [
        AlarmTypeEnum::COMPOSITE_ALARM,
        AlarmTypeEnum::COMPOSITE_ALARM,
        AlarmTypeEnum::COMPOSITE_ALARM,
    ];
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-24T23:43:42.369Z');
    $request->historyItemType = GETDescribeAlarmHistoryHistoryItemTypeEnum::ACTION;
    $request->maxRecords = 736918;
    $request->nextToken = 'esse';
    $request->scanBy = GETDescribeAlarmHistoryScanByEnum::TIMESTAMP_DESCENDING;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-24T06:58:38.511Z');
    $request->version = GETDescribeAlarmHistoryVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getDescribeAlarmHistory($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAlarms

<p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm name, the alarm state, or a prefix for any action.</p> <p>To use this operation and return information about composite alarms, you must be signed on with the <code>cloudwatch:DescribeAlarms</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarms</code> permission has a narrower scope.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAlarmsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAlarmsActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AlarmTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAlarmsStateValueEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAlarmsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeAlarmsRequest();
    $request->action = GETDescribeAlarmsActionEnum::DESCRIBE_ALARMS;
    $request->actionPrefix = 'laboriosam';
    $request->alarmNamePrefix = 'hic';
    $request->alarmNames = [
        'fuga',
        'in',
        'corporis',
        'iste',
    ];
    $request->alarmTypes = [
        AlarmTypeEnum::METRIC_ALARM,
        AlarmTypeEnum::METRIC_ALARM,
    ];
    $request->childrenOfAlarmName = 'architecto';
    $request->maxRecords = 60225;
    $request->nextToken = 'reiciendis';
    $request->parentsOfAlarmName = 'est';
    $request->stateValue = GETDescribeAlarmsStateValueEnum::ALARM;
    $request->version = GETDescribeAlarmsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->getDescribeAlarms($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeInsightRules

<p>Returns a list of all the Contributor Insights rules in your account.</p> <p>For more information about Contributor Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeInsightRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeInsightRulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeInsightRulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeInsightRulesRequest();
    $request->action = GETDescribeInsightRulesActionEnum::DESCRIBE_INSIGHT_RULES;
    $request->maxResults = 607831;
    $request->nextToken = 'nemo';
    $request->version = GETDescribeInsightRulesVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->getDescribeInsightRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDisableAlarmActions

Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableAlarmActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableAlarmActionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableAlarmActionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDisableAlarmActionsRequest();
    $request->action = GETDisableAlarmActionsActionEnum::DISABLE_ALARM_ACTIONS;
    $request->alarmNames = [
        'mollitia',
    ];
    $request->version = GETDisableAlarmActionsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->getDisableAlarmActions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDisableInsightRules

Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableInsightRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableInsightRulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableInsightRulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDisableInsightRulesRequest();
    $request->action = GETDisableInsightRulesActionEnum::DISABLE_INSIGHT_RULES;
    $request->ruleNames = [
        'quam',
        'molestiae',
    ];
    $request->version = GETDisableInsightRulesVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';

    $response = $sdk->sdk->getDisableInsightRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnableAlarmActions

Enables the actions for the specified alarms.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableAlarmActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableAlarmActionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableAlarmActionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETEnableAlarmActionsRequest();
    $request->action = GETEnableAlarmActionsActionEnum::ENABLE_ALARM_ACTIONS;
    $request->alarmNames = [
        'odit',
        'quo',
    ];
    $request->version = GETEnableAlarmActionsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->getEnableAlarmActions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnableInsightRules

Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableInsightRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableInsightRulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableInsightRulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETEnableInsightRulesRequest();
    $request->action = GETEnableInsightRulesActionEnum::ENABLE_INSIGHT_RULES;
    $request->ruleNames = [
        'temporibus',
        'laborum',
        'quasi',
    ];
    $request->version = GETEnableInsightRulesVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->getEnableInsightRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETDashboard

<p>Displays the details of the dashboard that you specify.</p> <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create the copy.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETDashboardRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETDashboardActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETDashboardVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETDashboardRequest();
    $request->action = GETGETDashboardActionEnum::GET_DASHBOARD;
    $request->dashboardName = 'omnis';
    $request->version = GETGETDashboardVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->getGETDashboard($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETInsightRuleReport

<p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of contributors to the log group.</p> <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETInsightRuleReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETInsightRuleReportActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETInsightRuleReportVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETInsightRuleReportRequest();
    $request->action = GETGETInsightRuleReportActionEnum::GET_INSIGHT_RULE_REPORT;
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T19:15:58.586Z');
    $request->maxContributorCount = 296140;
    $request->metrics = [
        'dicta',
        'harum',
    ];
    $request->orderBy = 'enim';
    $request->period = 880476;
    $request->ruleName = 'commodi';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-22T18:12:12.288Z');
    $request->version = GETGETInsightRuleReportVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->getGETInsightRuleReport($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETMetricStream

Returns information about the metric stream that you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETMetricStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETMetricStreamActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETMetricStreamVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETMetricStreamRequest();
    $request->action = GETGETMetricStreamActionEnum::GET_METRIC_STREAM;
    $request->name = 'Grady Botsford';
    $request->version = GETGETMetricStreamVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quibusdam';

    $response = $sdk->sdk->getGETMetricStream($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETMetricWidgetImage

<p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard.</p> <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations.</p> <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p> <ul> <li> <p>As many as 100 metrics in the graph.</p> </li> <li> <p>Up to 100 KB uncompressed payload.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETMetricWidgetImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETMetricWidgetImageActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETMetricWidgetImageVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETMetricWidgetImageRequest();
    $request->action = GETGETMetricWidgetImageActionEnum::GET_METRIC_WIDGET_IMAGE;
    $request->metricWidget = 'explicabo';
    $request->outputFormat = 'deserunt';
    $request->version = GETGETMetricWidgetImageVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';

    $response = $sdk->sdk->getGETMetricWidgetImage($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListDashboards

<p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed. </p> <p> <code>ListDashboards</code> returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call <code>ListDashboards</code> again and include the value you received for <code>NextToken</code> in the first call, to receive the next 1000 results.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListDashboardsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListDashboardsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListDashboardsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListDashboardsRequest();
    $request->action = GETListDashboardsActionEnum::LIST_DASHBOARDS;
    $request->dashboardNamePrefix = 'quos';
    $request->nextToken = 'perferendis';
    $request->version = GETListDashboardsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->getListDashboards($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListManagedInsightRules

 Returns a list that contains the number of managed Contributor Insights rules in your account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListManagedInsightRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListManagedInsightRulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListManagedInsightRulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListManagedInsightRulesRequest();
    $request->action = GETListManagedInsightRulesActionEnum::LIST_MANAGED_INSIGHT_RULES;
    $request->maxResults = 270008;
    $request->nextToken = 'facilis';
    $request->resourceARN = 'tempore';
    $request->version = GETListManagedInsightRulesVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->getListManagedInsightRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListMetricStreams

Returns a list of metric streams in this account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListMetricStreamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListMetricStreamsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListMetricStreamsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListMetricStreamsRequest();
    $request->action = GETListMetricStreamsActionEnum::LIST_METRIC_STREAMS;
    $request->maxResults = 592042;
    $request->nextToken = 'necessitatibus';
    $request->version = GETListMetricStreamsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->getListMetricStreams($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListTagsForResource

Displays the tags associated with a CloudWatch resource. Currently, alarms and Contributor Insights rules support tagging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListTagsForResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTagsForResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListTagsForResourceRequest();
    $request->action = GETListTagsForResourceActionEnum::LIST_TAGS_FOR_RESOURCE;
    $request->resourceARN = 'in';
    $request->version = GETListTagsForResourceVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';

    $response = $sdk->sdk->getListTagsForResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPutDashboard

<p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here.</p> <p>All dashboards in your account are global, not region-specific.</p> <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p> <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the <code>DashboardBody</code> script or the CloudFormation template used to create the dashboard.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPutDashboardRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPutDashboardActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPutDashboardVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPutDashboardRequest();
    $request->action = GETPutDashboardActionEnum::PUT_DASHBOARD;
    $request->dashboardBody = 'ea';
    $request->dashboardName = 'aliquid';
    $request->version = GETPutDashboardVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->getPutDashboard($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetAlarmState

<p>Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to <code>ALARM</code> sends an SNS message.</p> <p>Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p> <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It returns to its actual state only once any of its children alarms change state. It is also reevaluated if you update its configuration.</p> <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetAlarmStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetAlarmStateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetAlarmStateStateValueEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetAlarmStateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetAlarmStateRequest();
    $request->action = GETSetAlarmStateActionEnum::SET_ALARM_STATE;
    $request->alarmName = 'quidem';
    $request->stateReason = 'provident';
    $request->stateReasonData = 'nam';
    $request->stateValue = GETSetAlarmStateStateValueEnum::ALARM;
    $request->version = GETSetAlarmStateVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->getSetAlarmState($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStartMetricStreams

Starts the streaming of metrics for one or more of your metric streams.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETStartMetricStreamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETStartMetricStreamsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETStartMetricStreamsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStartMetricStreamsRequest();
    $request->action = GETStartMetricStreamsActionEnum::START_METRIC_STREAMS;
    $request->names = [
        'omnis',
        'molestiae',
        'perferendis',
    ];
    $request->version = GETStartMetricStreamsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->getStartMetricStreams($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStopMetricStreams

Stops the streaming of metrics for one or more of your metric streams.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETStopMetricStreamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETStopMetricStreamsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETStopMetricStreamsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETStopMetricStreamsRequest();
    $request->action = GETStopMetricStreamsActionEnum::STOP_METRIC_STREAMS;
    $request->names = [
        'nobis',
        'eum',
        'vero',
    ];
    $request->version = GETStopMetricStreamsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->getStopMetricStreams($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUntagResource

Removes one or more tags from the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUntagResourceRequest();
    $request->action = GETUntagResourceActionEnum::UNTAG_RESOURCE;
    $request->resourceARN = 'quos';
    $request->tagKeys = [
        'accusantium',
        'mollitia',
        'reiciendis',
    ];
    $request->version = GETUntagResourceVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->getUntagResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteAlarms

<p>Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't delete two composite alarms with one operation.</p> <p> If you specify an incorrect alarm name or make any other error in the operation, no alarms are deleted. To confirm that alarms were deleted successfully, you can use the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> operation after using <code>DeleteAlarms</code>.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAlarmsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAlarmsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAlarmsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteAlarmsRequest();
    $request->action = POSTDeleteAlarmsActionEnum::DELETE_ALARMS;
    $request->requestBody = 'quasi';
    $request->version = POSTDeleteAlarmsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->postDeleteAlarms($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteAnomalyDetector

 Deletes the specified anomaly detection model from your account. For more information about how to delete an anomaly detection model, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Anomaly_Detection_Alarm.html#Delete_Anomaly_Detection_Model">Deleting an anomaly detection model</a> in the <i>CloudWatch User Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAnomalyDetectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAnomalyDetectorActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAnomalyDetectorVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteAnomalyDetectorRequest();
    $request->action = POSTDeleteAnomalyDetectorActionEnum::DELETE_ANOMALY_DETECTOR;
    $request->requestBody = 'in';
    $request->version = POSTDeleteAnomalyDetectorVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'repellat';

    $response = $sdk->sdk->postDeleteAnomalyDetector($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDashboards

Deletes all dashboards that you specify. You can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDashboardsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDashboardsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDashboardsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDashboardsRequest();
    $request->action = POSTDeleteDashboardsActionEnum::DELETE_DASHBOARDS;
    $request->requestBody = 'quibusdam';
    $request->version = POSTDeleteDashboardsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->postDeleteDashboards($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteInsightRules

<p>Permanently deletes the specified Contributor Insights rules.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteInsightRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteInsightRulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteInsightRulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteInsightRulesRequest();
    $request->action = POSTDeleteInsightRulesActionEnum::DELETE_INSIGHT_RULES;
    $request->requestBody = 'magni';
    $request->version = POSTDeleteInsightRulesVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->postDeleteInsightRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteMetricStream

Permanently deletes the metric stream that you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteMetricStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteMetricStreamActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteMetricStreamVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteMetricStreamRequest();
    $request->action = POSTDeleteMetricStreamActionEnum::DELETE_METRIC_STREAM;
    $request->requestBody = 'odit';
    $request->version = POSTDeleteMetricStreamVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->postDeleteMetricStream($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAlarmHistory

<p>Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p> <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p> <p>To use this operation and return information about a composite alarm, you must be signed on with the <code>cloudwatch:DescribeAlarmHistory</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarmHistory</code> permission has a narrower scope.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAlarmHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAlarmHistoryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAlarmHistoryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAlarmHistoryRequest();
    $request->action = POSTDescribeAlarmHistoryActionEnum::DESCRIBE_ALARM_HISTORY;
    $request->maxRecords = 'autem';
    $request->nextToken = 'nam';
    $request->requestBody = 'eaque';
    $request->version = POSTDescribeAlarmHistoryVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->postDescribeAlarmHistory($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAlarms

<p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm name, the alarm state, or a prefix for any action.</p> <p>To use this operation and return information about composite alarms, you must be signed on with the <code>cloudwatch:DescribeAlarms</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarms</code> permission has a narrower scope.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAlarmsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAlarmsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAlarmsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAlarmsRequest();
    $request->action = POSTDescribeAlarmsActionEnum::DESCRIBE_ALARMS;
    $request->maxRecords = 'cumque';
    $request->nextToken = 'corporis';
    $request->requestBody = 'hic';
    $request->version = POSTDescribeAlarmsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'eaque';

    $response = $sdk->sdk->postDescribeAlarms($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAlarmsForMetric

<p>Retrieves the alarms for the specified metric. To filter the results, specify a statistic, period, or unit.</p> <p>This operation retrieves only standard alarms that are based on the specified metric. It does not return alarms based on math expressions that use the specified metric, or composite alarms that use the specified metric.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAlarmsForMetricRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAlarmsForMetricActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAlarmsForMetricVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAlarmsForMetricRequest();
    $request->action = POSTDescribeAlarmsForMetricActionEnum::DESCRIBE_ALARMS_FOR_METRIC;
    $request->requestBody = 'quis';
    $request->version = POSTDescribeAlarmsForMetricVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->postDescribeAlarmsForMetric($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAnomalyDetectors

Lists the anomaly detection models that you have created in your account. For single metric anomaly detectors, you can list all of the models in your account or filter the results to only the models that are related to a certain namespace, metric name, or metric dimension. For metric math anomaly detectors, you can list them by adding <code>METRIC_MATH</code> to the <code>AnomalyDetectorTypes</code> array. This will return all metric math anomaly detectors in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAnomalyDetectorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAnomalyDetectorsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAnomalyDetectorsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAnomalyDetectorsRequest();
    $request->action = POSTDescribeAnomalyDetectorsActionEnum::DESCRIBE_ANOMALY_DETECTORS;
    $request->maxResults = 'vero';
    $request->nextToken = 'nostrum';
    $request->requestBody = 'hic';
    $request->version = POSTDescribeAnomalyDetectorsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->postDescribeAnomalyDetectors($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeInsightRules

<p>Returns a list of all the Contributor Insights rules in your account.</p> <p>For more information about Contributor Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeInsightRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeInsightRulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeInsightRulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeInsightRulesRequest();
    $request->action = POSTDescribeInsightRulesActionEnum::DESCRIBE_INSIGHT_RULES;
    $request->maxResults = 'blanditiis';
    $request->nextToken = 'error';
    $request->requestBody = 'eaque';
    $request->version = POSTDescribeInsightRulesVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'iste';

    $response = $sdk->sdk->postDescribeInsightRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDisableAlarmActions

Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableAlarmActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableAlarmActionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableAlarmActionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDisableAlarmActionsRequest();
    $request->action = POSTDisableAlarmActionsActionEnum::DISABLE_ALARM_ACTIONS;
    $request->requestBody = 'dolorum';
    $request->version = POSTDisableAlarmActionsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->postDisableAlarmActions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDisableInsightRules

Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableInsightRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableInsightRulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableInsightRulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDisableInsightRulesRequest();
    $request->action = POSTDisableInsightRulesActionEnum::DISABLE_INSIGHT_RULES;
    $request->requestBody = 'quos';
    $request->version = POSTDisableInsightRulesVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->postDisableInsightRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEnableAlarmActions

Enables the actions for the specified alarms.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableAlarmActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableAlarmActionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableAlarmActionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTEnableAlarmActionsRequest();
    $request->action = POSTEnableAlarmActionsActionEnum::ENABLE_ALARM_ACTIONS;
    $request->requestBody = 'excepturi';
    $request->version = POSTEnableAlarmActionsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->postEnableAlarmActions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEnableInsightRules

Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableInsightRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableInsightRulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableInsightRulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTEnableInsightRulesRequest();
    $request->action = POSTEnableInsightRulesActionEnum::ENABLE_INSIGHT_RULES;
    $request->requestBody = 'veritatis';
    $request->version = POSTEnableInsightRulesVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->postEnableInsightRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetDashboard

<p>Displays the details of the dashboard that you specify.</p> <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create the copy.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetDashboardRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetDashboardActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetDashboardVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetDashboardRequest();
    $request->action = POSTGetDashboardActionEnum::GET_DASHBOARD;
    $request->requestBody = 'voluptatibus';
    $request->version = POSTGetDashboardVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->postGetDashboard($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetInsightRuleReport

<p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of contributors to the log group.</p> <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetInsightRuleReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetInsightRuleReportActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetInsightRuleReportVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetInsightRuleReportRequest();
    $request->action = POSTGetInsightRuleReportActionEnum::GET_INSIGHT_RULE_REPORT;
    $request->requestBody = 'soluta';
    $request->version = POSTGetInsightRuleReportVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->postGetInsightRuleReport($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetMetricData

<p>You can use the <code>GetMetricData</code> API to retrieve CloudWatch metric values. The operation can also include a CloudWatch Metrics Insights query, and one or more metric math functions.</p> <p>A <code>GetMetricData</code> operation that does not include a query can retrieve as many as 500 different metrics in a single request, with a total of as many as 100,800 data points. You can also optionally perform metric math expressions on the values of the returned statistics, to create new time series that represent new insights into your data. For example, using Lambda metrics, you could divide the Errors metric by the Invocations metric to get an error rate time series. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>If you include a Metrics Insights query, each <code>GetMetricData</code> operation can include only one query. But the same <code>GetMetricData</code> operation can also retrieve other metrics. Metrics Insights queries can query only the most recent three hours of metric data. For more information about Metrics Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/query_with_cloudwatch-metrics-insights.html">Query your metrics with CloudWatch Metrics Insights</a>.</p> <p>Calls to the <code>GetMetricData</code> API have a different pricing structure than calls to <code>GetMetricStatistics</code>. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>If you omit <code>Unit</code> in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p> <p> <b>Using Metrics Insights queries with metric math</b> </p> <p>You can't mix a Metric Insights query and metric math syntax in the same expression, but you can reference results from a Metrics Insights query within other Metric math expressions. A Metrics Insights query without a <b>GROUP BY</b> clause returns a single time-series (TS), and can be used as input for a metric math expression that expects a single time series. A Metrics Insights query with a <b>GROUP BY</b> clause returns an array of time-series (TS[]), and can be used as input for a metric math expression that expects an array of time series. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetMetricDataActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetMetricDataVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetMetricDataRequest();
    $request->action = POSTGetMetricDataActionEnum::GET_METRIC_DATA;
    $request->maxDatapoints = 'distinctio';
    $request->nextToken = 'asperiores';
    $request->requestBody = 'nihil';
    $request->version = POSTGetMetricDataVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->postGetMetricData($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetMetricStatistics

<p>Gets statistics for the specified metric.</p> <p>The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. Data points are not returned in chronological order.</p> <p>CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The SampleCount value of the statistic set is 1.</p> </li> <li> <p>The Min and the Max values of the statistic set are equal.</p> </li> </ul> <p>Percentile statistics are not available for metrics when any of the metric values are negative numbers.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016.</p> <p>For information about metrics and dimensions supported by Amazon Web Services services, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html">Amazon CloudWatch Metrics and Dimensions Reference</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetMetricStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetMetricStatisticsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetMetricStatisticsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetMetricStatisticsRequest();
    $request->action = POSTGetMetricStatisticsActionEnum::GET_METRIC_STATISTICS;
    $request->requestBody = 'amet';
    $request->version = POSTGetMetricStatisticsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->postGetMetricStatistics($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetMetricStream

Returns information about the metric stream that you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetMetricStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetMetricStreamActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetMetricStreamVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetMetricStreamRequest();
    $request->action = POSTGetMetricStreamActionEnum::GET_METRIC_STREAM;
    $request->requestBody = 'minima';
    $request->version = POSTGetMetricStreamVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->postGetMetricStream($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetMetricWidgetImage

<p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard.</p> <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations.</p> <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p> <ul> <li> <p>As many as 100 metrics in the graph.</p> </li> <li> <p>Up to 100 KB uncompressed payload.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetMetricWidgetImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetMetricWidgetImageActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetMetricWidgetImageVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetMetricWidgetImageRequest();
    $request->action = POSTGetMetricWidgetImageActionEnum::GET_METRIC_WIDGET_IMAGE;
    $request->requestBody = 'vel';
    $request->version = POSTGetMetricWidgetImageVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'harum';

    $response = $sdk->sdk->postGetMetricWidgetImage($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListDashboards

<p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed. </p> <p> <code>ListDashboards</code> returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call <code>ListDashboards</code> again and include the value you received for <code>NextToken</code> in the first call, to receive the next 1000 results.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListDashboardsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListDashboardsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListDashboardsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListDashboardsRequest();
    $request->action = POSTListDashboardsActionEnum::LIST_DASHBOARDS;
    $request->nextToken = 'iusto';
    $request->requestBody = 'ipsum';
    $request->version = POSTListDashboardsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->postListDashboards($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListManagedInsightRules

 Returns a list that contains the number of managed Contributor Insights rules in your account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListManagedInsightRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListManagedInsightRulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListManagedInsightRulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListManagedInsightRulesRequest();
    $request->action = POSTListManagedInsightRulesActionEnum::LIST_MANAGED_INSIGHT_RULES;
    $request->maxResults = 'dolorem';
    $request->nextToken = 'sapiente';
    $request->requestBody = 'totam';
    $request->version = POSTListManagedInsightRulesVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->postListManagedInsightRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListMetricStreams

Returns a list of metric streams in this account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListMetricStreamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListMetricStreamsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListMetricStreamsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListMetricStreamsRequest();
    $request->action = POSTListMetricStreamsActionEnum::LIST_METRIC_STREAMS;
    $request->maxResults = 'voluptas';
    $request->nextToken = 'deserunt';
    $request->requestBody = 'quam';
    $request->version = POSTListMetricStreamsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'soluta';

    $response = $sdk->sdk->postListMetricStreams($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListMetrics

<p>List the specified metrics. You can use the returned metrics with <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> to get statistical data.</p> <p>Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls.</p> <p>After you create a metric, allow up to 15 minutes for the metric to appear. To see metric statistics sooner, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view metrics from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p> <p> <code>ListMetrics</code> doesn't return information about metrics if those metrics haven't reported data in the past two weeks. To retrieve those metrics, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListMetricsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListMetricsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListMetricsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListMetricsRequest();
    $request->action = POSTListMetricsActionEnum::LIST_METRICS;
    $request->nextToken = 'dicta';
    $request->requestBody = 'laborum';
    $request->version = POSTListMetricsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->postListMetrics($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListTagsForResource

Displays the tags associated with a CloudWatch resource. Currently, alarms and Contributor Insights rules support tagging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTagsForResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTagsForResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListTagsForResourceRequest();
    $request->action = POSTListTagsForResourceActionEnum::LIST_TAGS_FOR_RESOURCE;
    $request->requestBody = 'quam';
    $request->version = POSTListTagsForResourceVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'odio';

    $response = $sdk->sdk->postListTagsForResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutAnomalyDetector

<p>Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutAnomalyDetectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutAnomalyDetectorActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutAnomalyDetectorVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutAnomalyDetectorRequest();
    $request->action = POSTPutAnomalyDetectorActionEnum::PUT_ANOMALY_DETECTOR;
    $request->requestBody = 'sunt';
    $request->version = POSTPutAnomalyDetectorVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->postPutAnomalyDetector($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutCompositeAlarm

<p>Creates or updates a <i>composite alarm</i>. When you create a composite alarm, you specify a rule expression for the alarm that takes into account the alarm states of other alarms that you have created. The composite alarm goes into ALARM state only if all conditions of the rule are met.</p> <p>The alarms specified in a composite alarm's rule expression can include metric alarms and other composite alarms. The rule expression of a composite alarm can include as many as 100 underlying alarms. Any single alarm can be included in the rule expressions of as many as 150 composite alarms.</p> <p>Using composite alarms can reduce alarm noise. You can create multiple metric alarms, and also create a composite alarm and set up alerts only for the composite alarm. For example, you could create a composite alarm that goes into ALARM state only when more than one of the underlying metric alarms are in ALARM state.</p> <p>Currently, the only alarm actions that can be taken by composite alarms are notifying SNS topics.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. For a composite alarm, this initial time after creation is the only time that the alarm can be in <code>INSUFFICIENT_DATA</code> state.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>To use this operation, you must be signed on with the <code>cloudwatch:PutCompositeAlarm</code> permission that is scoped to <code>*</code>. You can't create a composite alarms if your <code>cloudwatch:PutCompositeAlarm</code> permission has a narrower scope.</p> <p>If you are an IAM user, you must have <code>iam:CreateServiceLinkedRole</code> to create a composite alarm that has Systems Manager OpsItem actions.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutCompositeAlarmRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutCompositeAlarmActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutCompositeAlarmVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutCompositeAlarmRequest();
    $request->action = POSTPutCompositeAlarmActionEnum::PUT_COMPOSITE_ALARM;
    $request->requestBody = 'et';
    $request->version = POSTPutCompositeAlarmVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'cupiditate';

    $response = $sdk->sdk->postPutCompositeAlarm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutDashboard

<p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here.</p> <p>All dashboards in your account are global, not region-specific.</p> <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p> <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the <code>DashboardBody</code> script or the CloudFormation template used to create the dashboard.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutDashboardRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutDashboardActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutDashboardVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutDashboardRequest();
    $request->action = POSTPutDashboardActionEnum::PUT_DASHBOARD;
    $request->requestBody = 'aperiam';
    $request->version = POSTPutDashboardVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->postPutDashboard($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutInsightRule

<p>Creates a Contributor Insights rule. Rules evaluate log events in a CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutInsightRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutInsightRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutInsightRuleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutInsightRuleRequest();
    $request->action = POSTPutInsightRuleActionEnum::PUT_INSIGHT_RULE;
    $request->requestBody = 'quae';
    $request->version = POSTPutInsightRuleVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->postPutInsightRule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutManagedInsightRules

 Creates a managed Contributor Insights rule for a specified Amazon Web Services resource. When you enable a managed rule, you create a Contributor Insights rule that collects data from Amazon Web Services services. You cannot edit these rules with <code>PutInsightRule</code>. The rules can be enabled, disabled, and deleted using <code>EnableInsightRules</code>, <code>DisableInsightRules</code>, and <code>DeleteInsightRules</code>. If a previously created managed rule is currently disabled, a subsequent call to this API will re-enable it. Use <code>ListManagedInsightRules</code> to describe all available rules. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutManagedInsightRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutManagedInsightRulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutManagedInsightRulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutManagedInsightRulesRequest();
    $request->action = POSTPutManagedInsightRulesActionEnum::PUT_MANAGED_INSIGHT_RULES;
    $request->requestBody = 'doloribus';
    $request->version = POSTPutManagedInsightRulesVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'odio';

    $response = $sdk->sdk->postPutManagedInsightRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutMetricAlarm

<p>Creates or updates an alarm and associates it with the specified metric, metric math expression, anomaly detection model, or Metrics Insights query. For more information about using a Metrics Insights query for an alarm, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Metrics_Insights_Alarm.html">Create alarms on Metrics Insights queries</a>.</p> <p>Alarms based on anomaly detection models cannot have Auto Scaling actions.</p> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations:</p> <ul> <li> <p>The <code>iam:CreateServiceLinkedRole</code> permission for all alarms with EC2 actions</p> </li> <li> <p>The <code>iam:CreateServiceLinkedRole</code> permissions to create an alarm with Systems Manager OpsItem or response plan actions.</p> </li> </ul> <p>The first time you create an alarm in the Amazon Web Services Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked roles are called <code>AWSServiceRoleForCloudWatchEvents</code> and <code>AWSServiceRoleForCloudWatchAlarms_ActionSSM</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Amazon Web Services service-linked role</a>.</p> <p> <b>Cross-account alarms</b> </p> <p>You can set an alarm on metrics in the current account, or in another account. To create a cross-account alarm that watches a metric in a different account, you must have completed the following pre-requisites:</p> <ul> <li> <p>The account where the metrics are located (the <i>sharing account</i>) must already have a sharing role named <b>CloudWatch-CrossAccountSharingRole</b>. If it does not already have this role, you must create it using the instructions in <b>Set up a sharing account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region"> Cross-account cross-Region CloudWatch console</a>. The policy for that role must grant access to the ID of the account where you are creating the alarm. </p> </li> <li> <p>The account where you are creating the alarm (the <i>monitoring account</i>) must already have a service-linked role named <b>AWSServiceRoleForCloudWatchCrossAccount</b> to allow CloudWatch to assume the sharing role in the sharing account. If it does not, you must create it following the directions in <b>Set up a monitoring account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region"> Cross-account cross-Region CloudWatch console</a>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutMetricAlarmRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutMetricAlarmActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutMetricAlarmVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutMetricAlarmRequest();
    $request->action = POSTPutMetricAlarmActionEnum::PUT_METRIC_ALARM;
    $request->requestBody = 'occaecati';
    $request->version = POSTPutMetricAlarmVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->postPutMetricAlarm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutMetricData

<p>Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p> <p>You can publish either individual data points in the <code>Value</code> field, or arrays of values and the number of times each value occurred during the period by using the <code>Values</code> and <code>Counts</code> fields in the <code>MetricDatum</code> structure. Using the <code>Values</code> and <code>Counts</code> method enables you to publish up to 150 values per metric with one <code>PutMetricData</code> request, and supports retrieving percentile statistics on this data.</p> <p>Each <code>PutMetricData</code> request is limited to 1 MB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 1000 different metrics.</p> <p>Although the <code>Value</code> parameter accepts numbers of type <code>Double</code>, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p> <p>You can use up to 30 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>You specify the time stamp to be associated with each data point. You can specify time stamps that are as much as two weeks before the current date, and as much as 2 hours after the current day and time.</p> <p>Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> from the time they are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available for for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The <code>SampleCount</code> value of the statistic set is 1 and <code>Min</code>, <code>Max</code>, and <code>Sum</code> are all equal.</p> </li> <li> <p>The <code>Min</code> and <code>Max</code> are equal, and <code>Sum</code> is equal to <code>Min</code> multiplied by <code>SampleCount</code>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutMetricDataActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutMetricDataVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutMetricDataRequest();
    $request->action = POSTPutMetricDataActionEnum::PUT_METRIC_DATA;
    $request->requestBody = 'voluptate';
    $request->version = POSTPutMetricDataVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->postPutMetricData($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutMetricStream

<p>Creates or updates a metric stream. Metric streams can automatically stream CloudWatch metrics to Amazon Web Services destinations, including Amazon S3, and to many third-party solutions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html"> Using Metric Streams</a>.</p> <p>To create a metric stream, you must be signed in to an account that has the <code>iam:PassRole</code> permission and either the <code>CloudWatchFullAccess</code> policy or the <code>cloudwatch:PutMetricStream</code> permission.</p> <p>When you create or update a metric stream, you choose one of the following:</p> <ul> <li> <p>Stream metrics from all metric namespaces in the account.</p> </li> <li> <p>Stream metrics from all metric namespaces in the account, except for the namespaces that you list in <code>ExcludeFilters</code>.</p> </li> <li> <p>Stream metrics from only the metric namespaces that you list in <code>IncludeFilters</code>.</p> </li> </ul> <p>By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>, <code>SUM</code>, and <code>SAMPLECOUNT</code> statistics for each metric that is streamed. You can use the <code>StatisticsConfigurations</code> parameter to have the metric stream send additional statistics in the stream. Streaming additional statistics incurs additional costs. For more information, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>. </p> <p>When you use <code>PutMetricStream</code> to create a new metric stream, the stream is created in the <code>running</code> state. If you use it to update an existing stream, the state of the stream is not changed.</p> <p>If you are using CloudWatch cross-account observability and you create a metric stream in a monitoring account, you can choose whether to include metrics from source accounts in the stream. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutMetricStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutMetricStreamActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutMetricStreamVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutMetricStreamRequest();
    $request->action = POSTPutMetricStreamActionEnum::PUT_METRIC_STREAM;
    $request->requestBody = 'odio';
    $request->version = POSTPutMetricStreamVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->postPutMetricStream($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetAlarmState

<p>Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to <code>ALARM</code> sends an SNS message.</p> <p>Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p> <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It returns to its actual state only once any of its children alarms change state. It is also reevaluated if you update its configuration.</p> <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetAlarmStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetAlarmStateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetAlarmStateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetAlarmStateRequest();
    $request->action = POSTSetAlarmStateActionEnum::SET_ALARM_STATE;
    $request->requestBody = 'sequi';
    $request->version = POSTSetAlarmStateVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'exercitationem';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->postSetAlarmState($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStartMetricStreams

Starts the streaming of metrics for one or more of your metric streams.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartMetricStreamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartMetricStreamsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTStartMetricStreamsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTStartMetricStreamsRequest();
    $request->action = POSTStartMetricStreamsActionEnum::START_METRIC_STREAMS;
    $request->requestBody = 'porro';
    $request->version = POSTStartMetricStreamsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->postStartMetricStreams($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStopMetricStreams

Stops the streaming of metrics for one or more of your metric streams.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopMetricStreamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopMetricStreamsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTStopMetricStreamsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTStopMetricStreamsRequest();
    $request->action = POSTStopMetricStreamsActionEnum::STOP_METRIC_STREAMS;
    $request->requestBody = 'tempora';
    $request->version = POSTStopMetricStreamsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'ratione';

    $response = $sdk->sdk->postStopMetricStreams($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTagResource

<p>Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Currently, the only CloudWatch resources that can be tagged are alarms and Contributor Insights rules.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with an alarm that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a CloudWatch resource.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTTagResourceRequest();
    $request->action = POSTTagResourceActionEnum::TAG_RESOURCE;
    $request->requestBody = 'ex';
    $request->version = POSTTagResourceVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'nulla';

    $response = $sdk->sdk->postTagResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUntagResource

Removes one or more tags from the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUntagResourceRequest();
    $request->action = POSTUntagResourceActionEnum::UNTAG_RESOURCE;
    $request->requestBody = 'excepturi';
    $request->version = POSTUntagResourceVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->postUntagResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
