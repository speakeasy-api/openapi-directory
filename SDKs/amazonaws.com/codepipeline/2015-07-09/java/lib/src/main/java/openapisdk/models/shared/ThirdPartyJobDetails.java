package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThirdPartyJobDetails
 * The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request.
**/
public class ThirdPartyJobDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ThirdPartyJobData data;
    public ThirdPartyJobDetails withData(ThirdPartyJobData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ThirdPartyJobDetails withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonce")
    public String nonce;
    public ThirdPartyJobDetails withNonce(String nonce) {
        this.nonce = nonce;
        return this;
    }
}