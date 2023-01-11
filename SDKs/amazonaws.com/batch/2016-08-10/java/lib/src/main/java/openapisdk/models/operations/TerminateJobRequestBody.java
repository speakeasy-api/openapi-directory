package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TerminateJobRequestBody {
    @JsonProperty("jobId")
    public String jobId;
    public TerminateJobRequestBody withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonProperty("reason")
    public String reason;
    public TerminateJobRequestBody withReason(String reason) {
        this.reason = reason;
        return this;
    }
}