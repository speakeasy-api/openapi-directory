package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeEntitiesDetectionV2JobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeEntitiesDetectionV2JobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}