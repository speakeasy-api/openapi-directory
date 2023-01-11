package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopPhiDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public StopPhiDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}