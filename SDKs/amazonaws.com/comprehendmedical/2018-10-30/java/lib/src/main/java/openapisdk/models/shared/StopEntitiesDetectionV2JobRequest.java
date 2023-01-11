package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopEntitiesDetectionV2JobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public StopEntitiesDetectionV2JobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}