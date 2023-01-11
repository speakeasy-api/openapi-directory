package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeIcd10CmInferenceJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeIcd10CmInferenceJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}