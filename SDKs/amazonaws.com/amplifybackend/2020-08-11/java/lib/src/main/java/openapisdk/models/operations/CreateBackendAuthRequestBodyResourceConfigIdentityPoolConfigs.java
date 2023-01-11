package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
**/
public class CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs {
    @JsonProperty("IdentityPoolName")
    public java.util.Map<String, Object> identityPoolName;
    public CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs withIdentityPoolName(java.util.Map<String, Object> identityPoolName) {
        this.identityPoolName = identityPoolName;
        return this;
    }
    @JsonProperty("UnauthenticatedLogin")
    public java.util.Map<String, Object> unauthenticatedLogin;
    public CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs withUnauthenticatedLogin(java.util.Map<String, Object> unauthenticatedLogin) {
        this.unauthenticatedLogin = unauthenticatedLogin;
        return this;
    }
}