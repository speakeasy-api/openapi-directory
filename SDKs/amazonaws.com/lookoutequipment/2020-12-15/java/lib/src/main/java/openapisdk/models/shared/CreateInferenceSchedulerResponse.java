package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateInferenceSchedulerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InferenceSchedulerArn")
    public String inferenceSchedulerArn;
    public CreateInferenceSchedulerResponse withInferenceSchedulerArn(String inferenceSchedulerArn) {
        this.inferenceSchedulerArn = inferenceSchedulerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InferenceSchedulerName")
    public String inferenceSchedulerName;
    public CreateInferenceSchedulerResponse withInferenceSchedulerName(String inferenceSchedulerName) {
        this.inferenceSchedulerName = inferenceSchedulerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public InferenceSchedulerStatusEnum status;
    public CreateInferenceSchedulerResponse withStatus(InferenceSchedulerStatusEnum status) {
        this.status = status;
        return this;
    }
}