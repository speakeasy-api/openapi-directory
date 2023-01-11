package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobQueueDetail
 * An object representing the details of an Batch job queue.
**/
public class JobQueueDetail {
    @JsonProperty("computeEnvironmentOrder")
    public ComputeEnvironmentOrder[] computeEnvironmentOrder;
    public JobQueueDetail withComputeEnvironmentOrder(ComputeEnvironmentOrder[] computeEnvironmentOrder) {
        this.computeEnvironmentOrder = computeEnvironmentOrder;
        return this;
    }
    @JsonProperty("jobQueueArn")
    public String jobQueueArn;
    public JobQueueDetail withJobQueueArn(String jobQueueArn) {
        this.jobQueueArn = jobQueueArn;
        return this;
    }
    @JsonProperty("jobQueueName")
    public String jobQueueName;
    public JobQueueDetail withJobQueueName(String jobQueueName) {
        this.jobQueueName = jobQueueName;
        return this;
    }
    @JsonProperty("priority")
    public Long priority;
    public JobQueueDetail withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonProperty("state")
    public JqStateEnum state;
    public JobQueueDetail withState(JqStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public JqStatusEnum status;
    public JobQueueDetail withStatus(JqStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusReason")
    public String statusReason;
    public JobQueueDetail withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public JobQueueDetail withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}