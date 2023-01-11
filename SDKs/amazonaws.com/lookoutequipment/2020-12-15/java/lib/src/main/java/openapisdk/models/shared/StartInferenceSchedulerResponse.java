package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartInferenceSchedulerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InferenceSchedulerArn")
    public String inferenceSchedulerArn;
    public StartInferenceSchedulerResponse withInferenceSchedulerArn(String inferenceSchedulerArn) {
        this.inferenceSchedulerArn = inferenceSchedulerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InferenceSchedulerName")
    public String inferenceSchedulerName;
    public StartInferenceSchedulerResponse withInferenceSchedulerName(String inferenceSchedulerName) {
        this.inferenceSchedulerName = inferenceSchedulerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelArn")
    public String modelArn;
    public StartInferenceSchedulerResponse withModelArn(String modelArn) {
        this.modelArn = modelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelName")
    public String modelName;
    public StartInferenceSchedulerResponse withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public InferenceSchedulerStatusEnum status;
    public StartInferenceSchedulerResponse withStatus(InferenceSchedulerStatusEnum status) {
        this.status = status;
        return this;
    }
}