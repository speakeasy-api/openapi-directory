package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutThirdPartyJobFailureResultInput
 * Represents the input of a <code>PutThirdPartyJobFailureResult</code> action.
**/
public class PutThirdPartyJobFailureResultInput {
    @JsonProperty("clientToken")
    public String clientToken;
    public PutThirdPartyJobFailureResultInput withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("failureDetails")
    public FailureDetails failureDetails;
    public PutThirdPartyJobFailureResultInput withFailureDetails(FailureDetails failureDetails) {
        this.failureDetails = failureDetails;
        return this;
    }
    @JsonProperty("jobId")
    public String jobId;
    public PutThirdPartyJobFailureResultInput withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}