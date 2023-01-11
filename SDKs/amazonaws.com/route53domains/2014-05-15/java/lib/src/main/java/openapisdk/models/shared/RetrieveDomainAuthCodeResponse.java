package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RetrieveDomainAuthCodeResponse
 * The RetrieveDomainAuthCode response includes the following element.
**/
public class RetrieveDomainAuthCodeResponse {
    @JsonProperty("AuthCode")
    public String authCode;
    public RetrieveDomainAuthCodeResponse withAuthCode(String authCode) {
        this.authCode = authCode;
        return this;
    }
}