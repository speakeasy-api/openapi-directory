package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeEventsDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeEventsDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}