package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobDetail
 * An object representing an Batch job.
**/
public class JobDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arrayProperties")
    public ArrayPropertiesDetail arrayProperties;
    public JobDetail withArrayProperties(ArrayPropertiesDetail arrayProperties) {
        this.arrayProperties = arrayProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attempts")
    public AttemptDetail[] attempts;
    public JobDetail withAttempts(AttemptDetail[] attempts) {
        this.attempts = attempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public ContainerDetail container;
    public JobDetail withContainer(ContainerDetail container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAt")
    public Long createdAt;
    public JobDetail withCreatedAt(Long createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependsOn")
    public JobDependency[] dependsOn;
    public JobDetail withDependsOn(JobDependency[] dependsOn) {
        this.dependsOn = dependsOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobArn")
    public String jobArn;
    public JobDetail withJobArn(String jobArn) {
        this.jobArn = jobArn;
        return this;
    }
    @JsonProperty("jobDefinition")
    public String jobDefinition;
    public JobDetail withJobDefinition(String jobDefinition) {
        this.jobDefinition = jobDefinition;
        return this;
    }
    @JsonProperty("jobId")
    public String jobId;
    public JobDetail withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonProperty("jobName")
    public String jobName;
    public JobDetail withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonProperty("jobQueue")
    public String jobQueue;
    public JobDetail withJobQueue(String jobQueue) {
        this.jobQueue = jobQueue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeDetails")
    public NodeDetails nodeDetails;
    public JobDetail withNodeDetails(NodeDetails nodeDetails) {
        this.nodeDetails = nodeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeProperties")
    public NodeProperties nodeProperties;
    public JobDetail withNodeProperties(NodeProperties nodeProperties) {
        this.nodeProperties = nodeProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, String> parameters;
    public JobDetail withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformCapabilities")
    public PlatformCapabilityEnum[] platformCapabilities;
    public JobDetail withPlatformCapabilities(PlatformCapabilityEnum[] platformCapabilities) {
        this.platformCapabilities = platformCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propagateTags")
    public Boolean propagateTags;
    public JobDetail withPropagateTags(Boolean propagateTags) {
        this.propagateTags = propagateTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryStrategy")
    public RetryStrategy retryStrategy;
    public JobDetail withRetryStrategy(RetryStrategy retryStrategy) {
        this.retryStrategy = retryStrategy;
        return this;
    }
    @JsonProperty("startedAt")
    public Long startedAt;
    public JobDetail withStartedAt(Long startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonProperty("status")
    public JobStatusEnum status;
    public JobDetail withStatus(JobStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusReason")
    public String statusReason;
    public JobDetail withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stoppedAt")
    public Long stoppedAt;
    public JobDetail withStoppedAt(Long stoppedAt) {
        this.stoppedAt = stoppedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public JobDetail withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public JobTimeout timeout;
    public JobDetail withTimeout(JobTimeout timeout) {
        this.timeout = timeout;
        return this;
    }
}