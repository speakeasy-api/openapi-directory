package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public CancelJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}