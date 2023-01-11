package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeKeyPhrasesDetectionJobRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeKeyPhrasesDetectionJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}