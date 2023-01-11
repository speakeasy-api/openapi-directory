package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutThirdPartyJobSuccessResultInput
 * Represents the input of a <code>PutThirdPartyJobSuccessResult</code> action.
**/
public class PutThirdPartyJobSuccessResultInput {
    @JsonProperty("clientToken")
    public String clientToken;
    public PutThirdPartyJobSuccessResultInput withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continuationToken")
    public String continuationToken;
    public PutThirdPartyJobSuccessResultInput withContinuationToken(String continuationToken) {
        this.continuationToken = continuationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentRevision")
    public CurrentRevision currentRevision;
    public PutThirdPartyJobSuccessResultInput withCurrentRevision(CurrentRevision currentRevision) {
        this.currentRevision = currentRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionDetails")
    public ExecutionDetails executionDetails;
    public PutThirdPartyJobSuccessResultInput withExecutionDetails(ExecutionDetails executionDetails) {
        this.executionDetails = executionDetails;
        return this;
    }
    @JsonProperty("jobId")
    public String jobId;
    public PutThirdPartyJobSuccessResultInput withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}