package openapisdk.models.shared;



public class DescribeAlarmsForMetricOutput {
    public MetricAlarm[] metricAlarms;
    public DescribeAlarmsForMetricOutput withMetricAlarms(MetricAlarm[] metricAlarms) {
        this.metricAlarms = metricAlarms;
        return this;
    }
}