package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDataIngestionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeDataIngestionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}