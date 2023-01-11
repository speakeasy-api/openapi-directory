package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateComputeEnvironmentRequestBody {
    @JsonProperty("computeEnvironmentName")
    public String computeEnvironmentName;
    public CreateComputeEnvironmentRequestBody withComputeEnvironmentName(String computeEnvironmentName) {
        this.computeEnvironmentName = computeEnvironmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeResources")
    public CreateComputeEnvironmentRequestBodyComputeResources computeResources;
    public CreateComputeEnvironmentRequestBody withComputeResources(CreateComputeEnvironmentRequestBodyComputeResources computeResources) {
        this.computeResources = computeResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceRole")
    public String serviceRole;
    public CreateComputeEnvironmentRequestBody withServiceRole(String serviceRole) {
        this.serviceRole = serviceRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CreateComputeEnvironmentRequestBodyStateEnum state;
    public CreateComputeEnvironmentRequestBody withState(CreateComputeEnvironmentRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateComputeEnvironmentRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public CreateComputeEnvironmentRequestBodyTypeEnum type;
    public CreateComputeEnvironmentRequestBody withType(CreateComputeEnvironmentRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}