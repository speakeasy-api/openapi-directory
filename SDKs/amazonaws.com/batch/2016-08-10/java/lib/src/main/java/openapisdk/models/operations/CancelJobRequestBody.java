package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelJobRequestBody {
    @JsonProperty("jobId")
    public String jobId;
    public CancelJobRequestBody withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonProperty("reason")
    public String reason;
    public CancelJobRequestBody withReason(String reason) {
        this.reason = reason;
        return this;
    }
}