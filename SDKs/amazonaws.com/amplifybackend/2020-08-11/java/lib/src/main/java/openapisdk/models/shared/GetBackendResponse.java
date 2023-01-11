package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBackendResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AmplifyMetaConfig")
    public java.util.Map<String, Object> amplifyMetaConfig;
    public GetBackendResponse withAmplifyMetaConfig(java.util.Map<String, Object> amplifyMetaConfig) {
        this.amplifyMetaConfig = amplifyMetaConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppId")
    public java.util.Map<String, Object> appId;
    public GetBackendResponse withAppId(java.util.Map<String, Object> appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppName")
    public java.util.Map<String, Object> appName;
    public GetBackendResponse withAppName(java.util.Map<String, Object> appName) {
        this.appName = appName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackendEnvironmentList")
    public java.util.Map<String, Object> backendEnvironmentList;
    public GetBackendResponse withBackendEnvironmentList(java.util.Map<String, Object> backendEnvironmentList) {
        this.backendEnvironmentList = backendEnvironmentList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackendEnvironmentName")
    public java.util.Map<String, Object> backendEnvironmentName;
    public GetBackendResponse withBackendEnvironmentName(java.util.Map<String, Object> backendEnvironmentName) {
        this.backendEnvironmentName = backendEnvironmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public java.util.Map<String, Object> error;
    public GetBackendResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}