package openapisdk.models.shared;



public class DescribeAlarmsOutput {
    public CompositeAlarm[] compositeAlarms;
    public DescribeAlarmsOutput withCompositeAlarms(CompositeAlarm[] compositeAlarms) {
        this.compositeAlarms = compositeAlarms;
        return this;
    }
    public MetricAlarm[] metricAlarms;
    public DescribeAlarmsOutput withMetricAlarms(MetricAlarm[] metricAlarms) {
        this.metricAlarms = metricAlarms;
        return this;
    }
    public String nextToken;
    public DescribeAlarmsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}