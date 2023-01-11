package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSolutionRequest {
    @JsonProperty("solutionArn")
    public String solutionArn;
    public DeleteSolutionRequest withSolutionArn(String solutionArn) {
        this.solutionArn = solutionArn;
        return this;
    }
}