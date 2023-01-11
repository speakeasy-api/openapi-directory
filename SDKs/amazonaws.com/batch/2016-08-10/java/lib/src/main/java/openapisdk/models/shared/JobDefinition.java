package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobDefinition
 * An object representing an Batch job definition.
**/
public class JobDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerProperties")
    public ContainerProperties containerProperties;
    public JobDefinition withContainerProperties(ContainerProperties containerProperties) {
        this.containerProperties = containerProperties;
        return this;
    }
    @JsonProperty("jobDefinitionArn")
    public String jobDefinitionArn;
    public JobDefinition withJobDefinitionArn(String jobDefinitionArn) {
        this.jobDefinitionArn = jobDefinitionArn;
        return this;
    }
    @JsonProperty("jobDefinitionName")
    public String jobDefinitionName;
    public JobDefinition withJobDefinitionName(String jobDefinitionName) {
        this.jobDefinitionName = jobDefinitionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeProperties")
    public NodeProperties nodeProperties;
    public JobDefinition withNodeProperties(NodeProperties nodeProperties) {
        this.nodeProperties = nodeProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, String> parameters;
    public JobDefinition withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformCapabilities")
    public PlatformCapabilityEnum[] platformCapabilities;
    public JobDefinition withPlatformCapabilities(PlatformCapabilityEnum[] platformCapabilities) {
        this.platformCapabilities = platformCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propagateTags")
    public Boolean propagateTags;
    public JobDefinition withPropagateTags(Boolean propagateTags) {
        this.propagateTags = propagateTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryStrategy")
    public RetryStrategy retryStrategy;
    public JobDefinition withRetryStrategy(RetryStrategy retryStrategy) {
        this.retryStrategy = retryStrategy;
        return this;
    }
    @JsonProperty("revision")
    public Long revision;
    public JobDefinition withRevision(Long revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public JobDefinition withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public JobDefinition withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public JobTimeout timeout;
    public JobDefinition withTimeout(JobTimeout timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public JobDefinition withType(String type) {
        this.type = type;
        return this;
    }
}