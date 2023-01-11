package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchStopJobRunSuccessfulSubmission
 * Records a successful request to stop a specified <code>JobRun</code>.
**/
public class BatchStopJobRunSuccessfulSubmission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobName")
    public String jobName;
    public BatchStopJobRunSuccessfulSubmission withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobRunId")
    public String jobRunId;
    public BatchStopJobRunSuccessfulSubmission withJobRunId(String jobRunId) {
        this.jobRunId = jobRunId;
        return this;
    }
}