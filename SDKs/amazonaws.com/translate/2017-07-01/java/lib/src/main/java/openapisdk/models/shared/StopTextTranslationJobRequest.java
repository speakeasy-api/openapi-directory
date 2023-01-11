package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopTextTranslationJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public StopTextTranslationJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}