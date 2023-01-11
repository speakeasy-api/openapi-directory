package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateComputeEnvironmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEnvironmentArn")
    public String computeEnvironmentArn;
    public CreateComputeEnvironmentResponse withComputeEnvironmentArn(String computeEnvironmentArn) {
        this.computeEnvironmentArn = computeEnvironmentArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEnvironmentName")
    public String computeEnvironmentName;
    public CreateComputeEnvironmentResponse withComputeEnvironmentName(String computeEnvironmentName) {
        this.computeEnvironmentName = computeEnvironmentName;
        return this;
    }
}