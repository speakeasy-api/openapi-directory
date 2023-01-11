package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopPiiEntitiesDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public StopPiiEntitiesDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}