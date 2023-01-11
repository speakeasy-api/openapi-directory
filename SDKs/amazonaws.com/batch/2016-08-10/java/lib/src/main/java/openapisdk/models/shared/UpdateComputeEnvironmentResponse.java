package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateComputeEnvironmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEnvironmentArn")
    public String computeEnvironmentArn;
    public UpdateComputeEnvironmentResponse withComputeEnvironmentArn(String computeEnvironmentArn) {
        this.computeEnvironmentArn = computeEnvironmentArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEnvironmentName")
    public String computeEnvironmentName;
    public UpdateComputeEnvironmentResponse withComputeEnvironmentName(String computeEnvironmentName) {
        this.computeEnvironmentName = computeEnvironmentName;
        return this;
    }
}