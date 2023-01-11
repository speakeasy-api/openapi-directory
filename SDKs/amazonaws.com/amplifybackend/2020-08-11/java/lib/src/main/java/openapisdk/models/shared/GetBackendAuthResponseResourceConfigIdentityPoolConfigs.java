package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetBackendAuthResponseResourceConfigIdentityPoolConfigs
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
**/
public class GetBackendAuthResponseResourceConfigIdentityPoolConfigs {
    @JsonProperty("IdentityPoolName")
    public java.util.Map<String, Object> identityPoolName;
    public GetBackendAuthResponseResourceConfigIdentityPoolConfigs withIdentityPoolName(java.util.Map<String, Object> identityPoolName) {
        this.identityPoolName = identityPoolName;
        return this;
    }
    @JsonProperty("UnauthenticatedLogin")
    public java.util.Map<String, Object> unauthenticatedLogin;
    public GetBackendAuthResponseResourceConfigIdentityPoolConfigs withUnauthenticatedLogin(java.util.Map<String, Object> unauthenticatedLogin) {
        this.unauthenticatedLogin = unauthenticatedLogin;
        return this;
    }
}