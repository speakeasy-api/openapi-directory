package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateJobQueueRequestBody {
    @JsonProperty("computeEnvironmentOrder")
    public openapisdk.models.shared.ComputeEnvironmentOrder[] computeEnvironmentOrder;
    public CreateJobQueueRequestBody withComputeEnvironmentOrder(openapisdk.models.shared.ComputeEnvironmentOrder[] computeEnvironmentOrder) {
        this.computeEnvironmentOrder = computeEnvironmentOrder;
        return this;
    }
    @JsonProperty("jobQueueName")
    public String jobQueueName;
    public CreateJobQueueRequestBody withJobQueueName(String jobQueueName) {
        this.jobQueueName = jobQueueName;
        return this;
    }
    @JsonProperty("priority")
    public Long priority;
    public CreateJobQueueRequestBody withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CreateJobQueueRequestBodyStateEnum state;
    public CreateJobQueueRequestBody withState(CreateJobQueueRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateJobQueueRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}