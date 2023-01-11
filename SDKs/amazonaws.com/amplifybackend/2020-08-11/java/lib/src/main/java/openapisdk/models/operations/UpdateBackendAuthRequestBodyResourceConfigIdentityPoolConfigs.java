package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
**/
public class UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnauthenticatedLogin")
    public java.util.Map<String, Object> unauthenticatedLogin;
    public UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs withUnauthenticatedLogin(java.util.Map<String, Object> unauthenticatedLogin) {
        this.unauthenticatedLogin = unauthenticatedLogin;
        return this;
    }
}