package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBackendAuthRequestBodyResourceConfig
 * Defines the resource configuration when creating an auth resource in your Amplify project.
**/
public class CreateBackendAuthRequestBodyResourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthResources")
    public java.util.Map<String, Object> authResources;
    public CreateBackendAuthRequestBodyResourceConfig withAuthResources(java.util.Map<String, Object> authResources) {
        this.authResources = authResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPoolConfigs")
    public CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs identityPoolConfigs;
    public CreateBackendAuthRequestBodyResourceConfig withIdentityPoolConfigs(CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs identityPoolConfigs) {
        this.identityPoolConfigs = identityPoolConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Service")
    public java.util.Map<String, Object> service;
    public CreateBackendAuthRequestBodyResourceConfig withService(java.util.Map<String, Object> service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolConfigs")
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs userPoolConfigs;
    public CreateBackendAuthRequestBodyResourceConfig withUserPoolConfigs(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs userPoolConfigs) {
        this.userPoolConfigs = userPoolConfigs;
        return this;
    }
}