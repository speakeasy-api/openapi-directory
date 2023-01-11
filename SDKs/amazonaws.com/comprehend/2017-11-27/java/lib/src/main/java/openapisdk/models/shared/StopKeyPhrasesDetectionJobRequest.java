package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopKeyPhrasesDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public StopKeyPhrasesDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}