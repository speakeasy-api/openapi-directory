package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CognitoIdentityProvider
 * A provider representing an Amazon Cognito user pool and its client ID.
**/
public class CognitoIdentityProvider {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientId")
    public String clientId;
    public CognitoIdentityProvider withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderName")
    public String providerName;
    public CognitoIdentityProvider withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerSideTokenCheck")
    public Boolean serverSideTokenCheck;
    public CognitoIdentityProvider withServerSideTokenCheck(Boolean serverSideTokenCheck) {
        this.serverSideTokenCheck = serverSideTokenCheck;
        return this;
    }
}