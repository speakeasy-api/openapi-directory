package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateJobQueueRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEnvironmentOrder")
    public openapisdk.models.shared.ComputeEnvironmentOrder[] computeEnvironmentOrder;
    public UpdateJobQueueRequestBody withComputeEnvironmentOrder(openapisdk.models.shared.ComputeEnvironmentOrder[] computeEnvironmentOrder) {
        this.computeEnvironmentOrder = computeEnvironmentOrder;
        return this;
    }
    @JsonProperty("jobQueue")
    public String jobQueue;
    public UpdateJobQueueRequestBody withJobQueue(String jobQueue) {
        this.jobQueue = jobQueue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public UpdateJobQueueRequestBody withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public UpdateJobQueueRequestBodyStateEnum state;
    public UpdateJobQueueRequestBody withState(UpdateJobQueueRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
}