package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetThirdPartyJobDetailsInput
 * Represents the input of a <code>GetThirdPartyJobDetails</code> action.
**/
public class GetThirdPartyJobDetailsInput {
    @JsonProperty("clientToken")
    public String clientToken;
    public GetThirdPartyJobDetailsInput withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("jobId")
    public String jobId;
    public GetThirdPartyJobDetailsInput withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}