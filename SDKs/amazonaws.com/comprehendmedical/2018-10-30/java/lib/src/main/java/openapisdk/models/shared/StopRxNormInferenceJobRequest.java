package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopRxNormInferenceJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public StopRxNormInferenceJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}