package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribePhiDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribePhiDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}