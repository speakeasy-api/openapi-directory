package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeSentimentDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeSentimentDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}