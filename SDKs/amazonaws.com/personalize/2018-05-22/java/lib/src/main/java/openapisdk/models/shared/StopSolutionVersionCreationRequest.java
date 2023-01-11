package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopSolutionVersionCreationRequest {
    @JsonProperty("solutionVersionArn")
    public String solutionVersionArn;
    public StopSolutionVersionCreationRequest withSolutionVersionArn(String solutionVersionArn) {
        this.solutionVersionArn = solutionVersionArn;
        return this;
    }
}