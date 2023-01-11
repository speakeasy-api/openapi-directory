package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeEntitiesDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeEntitiesDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}