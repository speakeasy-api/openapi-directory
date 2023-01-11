package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopEventsDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public StopEventsDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}