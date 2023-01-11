package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeSolutionRequest {
    @JsonProperty("solutionArn")
    public String solutionArn;
    public DescribeSolutionRequest withSolutionArn(String solutionArn) {
        this.solutionArn = solutionArn;
        return this;
    }
}