package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubmitJobRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arrayProperties")
    public SubmitJobRequestBodyArrayProperties arrayProperties;
    public SubmitJobRequestBody withArrayProperties(SubmitJobRequestBodyArrayProperties arrayProperties) {
        this.arrayProperties = arrayProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerOverrides")
    public SubmitJobRequestBodyContainerOverrides containerOverrides;
    public SubmitJobRequestBody withContainerOverrides(SubmitJobRequestBodyContainerOverrides containerOverrides) {
        this.containerOverrides = containerOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependsOn")
    public openapisdk.models.shared.JobDependency[] dependsOn;
    public SubmitJobRequestBody withDependsOn(openapisdk.models.shared.JobDependency[] dependsOn) {
        this.dependsOn = dependsOn;
        return this;
    }
    @JsonProperty("jobDefinition")
    public String jobDefinition;
    public SubmitJobRequestBody withJobDefinition(String jobDefinition) {
        this.jobDefinition = jobDefinition;
        return this;
    }
    @JsonProperty("jobName")
    public String jobName;
    public SubmitJobRequestBody withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonProperty("jobQueue")
    public String jobQueue;
    public SubmitJobRequestBody withJobQueue(String jobQueue) {
        this.jobQueue = jobQueue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeOverrides")
    public SubmitJobRequestBodyNodeOverrides nodeOverrides;
    public SubmitJobRequestBody withNodeOverrides(SubmitJobRequestBodyNodeOverrides nodeOverrides) {
        this.nodeOverrides = nodeOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, String> parameters;
    public SubmitJobRequestBody withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propagateTags")
    public Boolean propagateTags;
    public SubmitJobRequestBody withPropagateTags(Boolean propagateTags) {
        this.propagateTags = propagateTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryStrategy")
    public SubmitJobRequestBodyRetryStrategy retryStrategy;
    public SubmitJobRequestBody withRetryStrategy(SubmitJobRequestBodyRetryStrategy retryStrategy) {
        this.retryStrategy = retryStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public SubmitJobRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public SubmitJobRequestBodyTimeout timeout;
    public SubmitJobRequestBody withTimeout(SubmitJobRequestBodyTimeout timeout) {
        this.timeout = timeout;
        return this;
    }
}