package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchStopJobRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public BatchStopJobRunError[] errors;
    public BatchStopJobRunResponse withErrors(BatchStopJobRunError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuccessfulSubmissions")
    public BatchStopJobRunSuccessfulSubmission[] successfulSubmissions;
    public BatchStopJobRunResponse withSuccessfulSubmissions(BatchStopJobRunSuccessfulSubmission[] successfulSubmissions) {
        this.successfulSubmissions = successfulSubmissions;
        return this;
    }
}