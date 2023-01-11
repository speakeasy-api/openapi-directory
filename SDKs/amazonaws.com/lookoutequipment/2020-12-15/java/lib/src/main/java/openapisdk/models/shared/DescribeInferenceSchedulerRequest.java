package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeInferenceSchedulerRequest {
    @JsonProperty("InferenceSchedulerName")
    public String inferenceSchedulerName;
    public DescribeInferenceSchedulerRequest withInferenceSchedulerName(String inferenceSchedulerName) {
        this.inferenceSchedulerName = inferenceSchedulerName;
        return this;
    }
}