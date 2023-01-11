package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubmitJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobArn")
    public String jobArn;
    public SubmitJobResponse withJobArn(String jobArn) {
        this.jobArn = jobArn;
        return this;
    }
    @JsonProperty("jobId")
    public String jobId;
    public SubmitJobResponse withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonProperty("jobName")
    public String jobName;
    public SubmitJobResponse withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
}