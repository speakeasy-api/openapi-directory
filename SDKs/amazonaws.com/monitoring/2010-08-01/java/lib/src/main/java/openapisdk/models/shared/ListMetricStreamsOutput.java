package openapisdk.models.shared;



public class ListMetricStreamsOutput {
    public MetricStreamEntry[] entries;
    public ListMetricStreamsOutput withEntries(MetricStreamEntry[] entries) {
        this.entries = entries;
        return this;
    }
    public String nextToken;
    public ListMetricStreamsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}