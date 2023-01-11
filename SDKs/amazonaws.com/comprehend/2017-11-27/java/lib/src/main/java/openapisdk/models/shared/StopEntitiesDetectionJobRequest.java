package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopEntitiesDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public StopEntitiesDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}