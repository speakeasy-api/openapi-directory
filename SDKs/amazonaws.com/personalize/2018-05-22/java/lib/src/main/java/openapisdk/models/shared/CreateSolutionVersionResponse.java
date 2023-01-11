package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSolutionVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solutionVersionArn")
    public String solutionVersionArn;
    public CreateSolutionVersionResponse withSolutionVersionArn(String solutionVersionArn) {
        this.solutionVersionArn = solutionVersionArn;
        return this;
    }
}