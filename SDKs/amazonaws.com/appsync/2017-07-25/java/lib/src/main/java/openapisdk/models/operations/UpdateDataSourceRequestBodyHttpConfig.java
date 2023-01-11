package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDataSourceRequestBodyHttpConfig
 * Describes an HTTP data source configuration.
**/
public class UpdateDataSourceRequestBodyHttpConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationConfig")
    public openapisdk.models.shared.AuthorizationConfig authorizationConfig;
    public UpdateDataSourceRequestBodyHttpConfig withAuthorizationConfig(openapisdk.models.shared.AuthorizationConfig authorizationConfig) {
        this.authorizationConfig = authorizationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;
    public UpdateDataSourceRequestBodyHttpConfig withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}