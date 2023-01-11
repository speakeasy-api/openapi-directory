package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetJobRequest {
    @JsonProperty("JobName")
    public String jobName;
    public GetJobRequest withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
}