package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTopicsDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeTopicsDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}