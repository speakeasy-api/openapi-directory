package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSolutionMetricsRequest {
    @JsonProperty("solutionVersionArn")
    public String solutionVersionArn;
    public GetSolutionMetricsRequest withSolutionVersionArn(String solutionVersionArn) {
        this.solutionVersionArn = solutionVersionArn;
        return this;
    }
}