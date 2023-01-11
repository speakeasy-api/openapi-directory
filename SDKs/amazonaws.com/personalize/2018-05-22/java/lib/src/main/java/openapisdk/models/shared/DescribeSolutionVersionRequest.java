package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeSolutionVersionRequest {
    @JsonProperty("solutionVersionArn")
    public String solutionVersionArn;
    public DescribeSolutionVersionRequest withSolutionVersionArn(String solutionVersionArn) {
        this.solutionVersionArn = solutionVersionArn;
        return this;
    }
}