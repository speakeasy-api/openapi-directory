package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopDominantLanguageDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public StopDominantLanguageDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}