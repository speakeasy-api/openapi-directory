package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateJobExecutionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionState")
    public JobExecutionState executionState;
    public UpdateJobExecutionResponse withExecutionState(JobExecutionState executionState) {
        this.executionState = executionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobDocument")
    public String jobDocument;
    public UpdateJobExecutionResponse withJobDocument(String jobDocument) {
        this.jobDocument = jobDocument;
        return this;
    }
}