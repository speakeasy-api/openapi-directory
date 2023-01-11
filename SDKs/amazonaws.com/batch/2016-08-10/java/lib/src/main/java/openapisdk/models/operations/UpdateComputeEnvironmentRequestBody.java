package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateComputeEnvironmentRequestBody {
    @JsonProperty("computeEnvironment")
    public String computeEnvironment;
    public UpdateComputeEnvironmentRequestBody withComputeEnvironment(String computeEnvironment) {
        this.computeEnvironment = computeEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeResources")
    public UpdateComputeEnvironmentRequestBodyComputeResources computeResources;
    public UpdateComputeEnvironmentRequestBody withComputeResources(UpdateComputeEnvironmentRequestBodyComputeResources computeResources) {
        this.computeResources = computeResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceRole")
    public String serviceRole;
    public UpdateComputeEnvironmentRequestBody withServiceRole(String serviceRole) {
        this.serviceRole = serviceRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public UpdateComputeEnvironmentRequestBodyStateEnum state;
    public UpdateComputeEnvironmentRequestBody withState(UpdateComputeEnvironmentRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
}