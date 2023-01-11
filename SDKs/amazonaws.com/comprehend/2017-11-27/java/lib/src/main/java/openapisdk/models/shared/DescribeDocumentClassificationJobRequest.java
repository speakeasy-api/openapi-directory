package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDocumentClassificationJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeDocumentClassificationJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}