package openapisdk.models.shared;



public class GetMetricStatisticsOutput {
    public Datapoint[] datapoints;
    public GetMetricStatisticsOutput withDatapoints(Datapoint[] datapoints) {
        this.datapoints = datapoints;
        return this;
    }
    public String label;
    public GetMetricStatisticsOutput withLabel(String label) {
        this.label = label;
        return this;
    }
}