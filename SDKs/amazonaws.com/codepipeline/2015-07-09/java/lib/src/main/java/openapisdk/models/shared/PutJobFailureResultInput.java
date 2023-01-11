package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutJobFailureResultInput
 * Represents the input of a <code>PutJobFailureResult</code> action.
**/
public class PutJobFailureResultInput {
    @JsonProperty("failureDetails")
    public FailureDetails failureDetails;
    public PutJobFailureResultInput withFailureDetails(FailureDetails failureDetails) {
        this.failureDetails = failureDetails;
        return this;
    }
    @JsonProperty("jobId")
    public String jobId;
    public PutJobFailureResultInput withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}