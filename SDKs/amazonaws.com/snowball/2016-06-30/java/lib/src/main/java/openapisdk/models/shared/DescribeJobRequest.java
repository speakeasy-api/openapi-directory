package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}