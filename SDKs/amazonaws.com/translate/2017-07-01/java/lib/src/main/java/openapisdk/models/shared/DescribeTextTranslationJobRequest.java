package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTextTranslationJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeTextTranslationJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}