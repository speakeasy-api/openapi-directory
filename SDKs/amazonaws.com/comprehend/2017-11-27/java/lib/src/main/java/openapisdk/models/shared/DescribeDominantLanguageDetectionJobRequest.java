package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDominantLanguageDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeDominantLanguageDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}