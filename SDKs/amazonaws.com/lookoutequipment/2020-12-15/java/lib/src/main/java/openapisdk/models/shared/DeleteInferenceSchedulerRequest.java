package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteInferenceSchedulerRequest {
    @JsonProperty("InferenceSchedulerName")
    public String inferenceSchedulerName;
    public DeleteInferenceSchedulerRequest withInferenceSchedulerName(String inferenceSchedulerName) {
        this.inferenceSchedulerName = inferenceSchedulerName;
        return this;
    }
}