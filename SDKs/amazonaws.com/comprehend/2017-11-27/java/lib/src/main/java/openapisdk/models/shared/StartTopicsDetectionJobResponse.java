package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartTopicsDetectionJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobArn")
    public String jobArn;
    public StartTopicsDetectionJobResponse withJobArn(String jobArn) {
        this.jobArn = jobArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobId")
    public String jobId;
    public StartTopicsDetectionJobResponse withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobStatus")
    public JobStatusEnum jobStatus;
    public StartTopicsDetectionJobResponse withJobStatus(JobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
}