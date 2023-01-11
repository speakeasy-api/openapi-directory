package openapisdk.models.shared;



public class ListMetricsOutput {
    public Metric[] metrics;
    public ListMetricsOutput withMetrics(Metric[] metrics) {
        this.metrics = metrics;
        return this;
    }
    public String nextToken;
    public ListMetricsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}