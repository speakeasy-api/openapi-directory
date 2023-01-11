package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteComputeEnvironmentRequestBody {
    @JsonProperty("computeEnvironment")
    public String computeEnvironment;
    public DeleteComputeEnvironmentRequestBody withComputeEnvironment(String computeEnvironment) {
        this.computeEnvironment = computeEnvironment;
        return this;
    }
}