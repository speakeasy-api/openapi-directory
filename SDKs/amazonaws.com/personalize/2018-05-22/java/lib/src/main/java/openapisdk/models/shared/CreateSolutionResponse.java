package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSolutionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solutionArn")
    public String solutionArn;
    public CreateSolutionResponse withSolutionArn(String solutionArn) {
        this.solutionArn = solutionArn;
        return this;
    }
}