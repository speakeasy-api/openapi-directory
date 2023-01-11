package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetJobUnlockCodeRequest {
    @JsonProperty("JobId")
    public String jobId;
    public GetJobUnlockCodeRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}