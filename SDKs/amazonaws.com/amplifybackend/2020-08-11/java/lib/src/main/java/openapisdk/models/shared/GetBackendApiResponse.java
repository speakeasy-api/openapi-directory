package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBackendApiResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppId")
    public java.util.Map<String, Object> appId;
    public GetBackendApiResponse withAppId(java.util.Map<String, Object> appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackendEnvironmentName")
    public java.util.Map<String, Object> backendEnvironmentName;
    public GetBackendApiResponse withBackendEnvironmentName(java.util.Map<String, Object> backendEnvironmentName) {
        this.backendEnvironmentName = backendEnvironmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public java.util.Map<String, Object> error;
    public GetBackendApiResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceConfig")
    public GetBackendApiResponseResourceConfig resourceConfig;
    public GetBackendApiResponse withResourceConfig(GetBackendApiResponseResourceConfig resourceConfig) {
        this.resourceConfig = resourceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceName")
    public java.util.Map<String, Object> resourceName;
    public GetBackendApiResponse withResourceName(java.util.Map<String, Object> resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}