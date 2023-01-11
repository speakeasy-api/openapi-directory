package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterJobDefinitionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerProperties")
    public RegisterJobDefinitionRequestBodyContainerProperties containerProperties;
    public RegisterJobDefinitionRequestBody withContainerProperties(RegisterJobDefinitionRequestBodyContainerProperties containerProperties) {
        this.containerProperties = containerProperties;
        return this;
    }
    @JsonProperty("jobDefinitionName")
    public String jobDefinitionName;
    public RegisterJobDefinitionRequestBody withJobDefinitionName(String jobDefinitionName) {
        this.jobDefinitionName = jobDefinitionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeProperties")
    public RegisterJobDefinitionRequestBodyNodeProperties nodeProperties;
    public RegisterJobDefinitionRequestBody withNodeProperties(RegisterJobDefinitionRequestBodyNodeProperties nodeProperties) {
        this.nodeProperties = nodeProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, String> parameters;
    public RegisterJobDefinitionRequestBody withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformCapabilities")
    public openapisdk.models.shared.PlatformCapabilityEnum[] platformCapabilities;
    public RegisterJobDefinitionRequestBody withPlatformCapabilities(openapisdk.models.shared.PlatformCapabilityEnum[] platformCapabilities) {
        this.platformCapabilities = platformCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propagateTags")
    public Boolean propagateTags;
    public RegisterJobDefinitionRequestBody withPropagateTags(Boolean propagateTags) {
        this.propagateTags = propagateTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryStrategy")
    public RegisterJobDefinitionRequestBodyRetryStrategy retryStrategy;
    public RegisterJobDefinitionRequestBody withRetryStrategy(RegisterJobDefinitionRequestBodyRetryStrategy retryStrategy) {
        this.retryStrategy = retryStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public RegisterJobDefinitionRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public RegisterJobDefinitionRequestBodyTimeout timeout;
    public RegisterJobDefinitionRequestBody withTimeout(RegisterJobDefinitionRequestBodyTimeout timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonProperty("type")
    public RegisterJobDefinitionRequestBodyTypeEnum type;
    public RegisterJobDefinitionRequestBody withType(RegisterJobDefinitionRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}