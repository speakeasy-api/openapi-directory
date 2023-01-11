package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopIcd10CmInferenceJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public StopIcd10CmInferenceJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}