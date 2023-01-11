package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBackendAuthResponseResourceConfig
 * The resource configuration for authorization requests to the backend of your Amplify project.
**/
public class GetBackendAuthResponseResourceConfig {
    @JsonProperty("AuthResources")
    public java.util.Map<String, Object> authResources;
    public GetBackendAuthResponseResourceConfig withAuthResources(java.util.Map<String, Object> authResources) {
        this.authResources = authResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPoolConfigs")
    public GetBackendAuthResponseResourceConfigIdentityPoolConfigs identityPoolConfigs;
    public GetBackendAuthResponseResourceConfig withIdentityPoolConfigs(GetBackendAuthResponseResourceConfigIdentityPoolConfigs identityPoolConfigs) {
        this.identityPoolConfigs = identityPoolConfigs;
        return this;
    }
    @JsonProperty("Service")
    public java.util.Map<String, Object> service;
    public GetBackendAuthResponseResourceConfig withService(java.util.Map<String, Object> service) {
        this.service = service;
        return this;
    }
    @JsonProperty("UserPoolConfigs")
    public GetBackendAuthResponseResourceConfigUserPoolConfigs userPoolConfigs;
    public GetBackendAuthResponseResourceConfig withUserPoolConfigs(GetBackendAuthResponseResourceConfigUserPoolConfigs userPoolConfigs) {
        this.userPoolConfigs = userPoolConfigs;
        return this;
    }
}