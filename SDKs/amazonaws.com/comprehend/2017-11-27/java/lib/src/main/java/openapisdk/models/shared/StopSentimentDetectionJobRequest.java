package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopSentimentDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public StopSentimentDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}