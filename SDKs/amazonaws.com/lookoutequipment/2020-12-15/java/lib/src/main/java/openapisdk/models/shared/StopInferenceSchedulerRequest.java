package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopInferenceSchedulerRequest {
    @JsonProperty("InferenceSchedulerName")
    public String inferenceSchedulerName;
    public StopInferenceSchedulerRequest withInferenceSchedulerName(String inferenceSchedulerName) {
        this.inferenceSchedulerName = inferenceSchedulerName;
        return this;
    }
}