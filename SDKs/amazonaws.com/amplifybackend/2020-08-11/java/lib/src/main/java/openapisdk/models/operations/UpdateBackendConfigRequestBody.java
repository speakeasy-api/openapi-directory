package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateBackendConfigRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginAuthConfig")
    public UpdateBackendConfigRequestBodyLoginAuthConfig loginAuthConfig;
    public UpdateBackendConfigRequestBody withLoginAuthConfig(UpdateBackendConfigRequestBodyLoginAuthConfig loginAuthConfig) {
        this.loginAuthConfig = loginAuthConfig;
        return this;
    }
}