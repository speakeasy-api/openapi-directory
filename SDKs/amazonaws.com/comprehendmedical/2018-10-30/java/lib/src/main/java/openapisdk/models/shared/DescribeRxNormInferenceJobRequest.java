package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeRxNormInferenceJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeRxNormInferenceJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}