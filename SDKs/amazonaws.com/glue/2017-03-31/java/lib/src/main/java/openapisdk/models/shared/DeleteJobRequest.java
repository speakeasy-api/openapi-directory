package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteJobRequest {
    @JsonProperty("JobName")
    public String jobName;
    public DeleteJobRequest withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
}