package openapisdk.models.shared;



public class GetMetricDataOutput {
    public MessageData[] messages;
    public GetMetricDataOutput withMessages(MessageData[] messages) {
        this.messages = messages;
        return this;
    }
    public MetricDataResult[] metricDataResults;
    public GetMetricDataOutput withMetricDataResults(MetricDataResult[] metricDataResults) {
        this.metricDataResults = metricDataResults;
        return this;
    }
    public String nextToken;
    public GetMetricDataOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}