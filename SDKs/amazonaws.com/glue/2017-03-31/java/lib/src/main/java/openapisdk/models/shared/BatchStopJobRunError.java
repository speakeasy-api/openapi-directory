package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchStopJobRunError
 * Records an error that occurred when attempting to stop a specified job run.
**/
public class BatchStopJobRunError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorDetail")
    public ErrorDetail errorDetail;
    public BatchStopJobRunError withErrorDetail(ErrorDetail errorDetail) {
        this.errorDetail = errorDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobName")
    public String jobName;
    public BatchStopJobRunError withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobRunId")
    public String jobRunId;
    public BatchStopJobRunError withJobRunId(String jobRunId) {
        this.jobRunId = jobRunId;
        return this;
    }
}