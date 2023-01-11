package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBackendRequestBody {
    @JsonProperty("appId")
    public String appId;
    public CreateBackendRequestBody withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonProperty("appName")
    public String appName;
    public CreateBackendRequestBody withAppName(String appName) {
        this.appName = appName;
        return this;
    }
    @JsonProperty("backendEnvironmentName")
    public String backendEnvironmentName;
    public CreateBackendRequestBody withBackendEnvironmentName(String backendEnvironmentName) {
        this.backendEnvironmentName = backendEnvironmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceConfig")
    public java.util.Map<String, Object> resourceConfig;
    public CreateBackendRequestBody withResourceConfig(java.util.Map<String, Object> resourceConfig) {
        this.resourceConfig = resourceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public CreateBackendRequestBody withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}