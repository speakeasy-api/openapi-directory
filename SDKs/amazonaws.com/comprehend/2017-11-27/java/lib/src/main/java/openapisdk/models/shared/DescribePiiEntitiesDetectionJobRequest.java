package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribePiiEntitiesDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribePiiEntitiesDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}