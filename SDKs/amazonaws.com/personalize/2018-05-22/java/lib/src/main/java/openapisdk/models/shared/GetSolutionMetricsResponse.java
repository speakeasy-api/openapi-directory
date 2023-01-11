package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSolutionMetricsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public java.util.Map<String, Double> metrics;
    public GetSolutionMetricsResponse withMetrics(java.util.Map<String, Double> metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solutionVersionArn")
    public String solutionVersionArn;
    public GetSolutionMetricsResponse withSolutionVersionArn(String solutionVersionArn) {
        this.solutionVersionArn = solutionVersionArn;
        return this;
    }
}