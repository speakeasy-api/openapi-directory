package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutJobSuccessResultInput
 * Represents the input of a <code>PutJobSuccessResult</code> action.
**/
public class PutJobSuccessResultInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continuationToken")
    public String continuationToken;
    public PutJobSuccessResultInput withContinuationToken(String continuationToken) {
        this.continuationToken = continuationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentRevision")
    public CurrentRevision currentRevision;
    public PutJobSuccessResultInput withCurrentRevision(CurrentRevision currentRevision) {
        this.currentRevision = currentRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionDetails")
    public ExecutionDetails executionDetails;
    public PutJobSuccessResultInput withExecutionDetails(ExecutionDetails executionDetails) {
        this.executionDetails = executionDetails;
        return this;
    }
    @JsonProperty("jobId")
    public String jobId;
    public PutJobSuccessResultInput withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputVariables")
    public java.util.Map<String, String> outputVariables;
    public PutJobSuccessResultInput withOutputVariables(java.util.Map<String, String> outputVariables) {
        this.outputVariables = outputVariables;
        return this;
    }
}