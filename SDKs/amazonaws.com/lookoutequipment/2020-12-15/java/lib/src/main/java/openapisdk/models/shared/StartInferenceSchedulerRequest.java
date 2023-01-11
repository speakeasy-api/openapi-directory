package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartInferenceSchedulerRequest {
    @JsonProperty("InferenceSchedulerName")
    public String inferenceSchedulerName;
    public StartInferenceSchedulerRequest withInferenceSchedulerName(String inferenceSchedulerName) {
        this.inferenceSchedulerName = inferenceSchedulerName;
        return this;
    }
}