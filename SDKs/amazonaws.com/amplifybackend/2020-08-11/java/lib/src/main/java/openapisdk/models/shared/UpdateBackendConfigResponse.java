package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateBackendConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppId")
    public java.util.Map<String, Object> appId;
    public UpdateBackendConfigResponse withAppId(java.util.Map<String, Object> appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackendManagerAppId")
    public java.util.Map<String, Object> backendManagerAppId;
    public UpdateBackendConfigResponse withBackendManagerAppId(java.util.Map<String, Object> backendManagerAppId) {
        this.backendManagerAppId = backendManagerAppId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public java.util.Map<String, Object> error;
    public UpdateBackendConfigResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoginAuthConfig")
    public UpdateBackendConfigResponseLoginAuthConfig loginAuthConfig;
    public UpdateBackendConfigResponse withLoginAuthConfig(UpdateBackendConfigResponseLoginAuthConfig loginAuthConfig) {
        this.loginAuthConfig = loginAuthConfig;
        return this;
    }
}