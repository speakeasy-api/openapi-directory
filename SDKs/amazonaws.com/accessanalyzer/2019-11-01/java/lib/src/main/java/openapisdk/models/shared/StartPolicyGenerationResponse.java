package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartPolicyGenerationResponse {
    @JsonProperty("jobId")
    public String jobId;
    public StartPolicyGenerationResponse withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}