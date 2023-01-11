package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendAuthRequestBodyResourceConfig
 * Defines the resource configuration when updating an authentication resource in your Amplify project.
**/
public class UpdateBackendAuthRequestBodyResourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthResources")
    public java.util.Map<String, Object> authResources;
    public UpdateBackendAuthRequestBodyResourceConfig withAuthResources(java.util.Map<String, Object> authResources) {
        this.authResources = authResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPoolConfigs")
    public UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs identityPoolConfigs;
    public UpdateBackendAuthRequestBodyResourceConfig withIdentityPoolConfigs(UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs identityPoolConfigs) {
        this.identityPoolConfigs = identityPoolConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Service")
    public java.util.Map<String, Object> service;
    public UpdateBackendAuthRequestBodyResourceConfig withService(java.util.Map<String, Object> service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolConfigs")
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs userPoolConfigs;
    public UpdateBackendAuthRequestBodyResourceConfig withUserPoolConfigs(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs userPoolConfigs) {
        this.userPoolConfigs = userPoolConfigs;
        return this;
    }
}