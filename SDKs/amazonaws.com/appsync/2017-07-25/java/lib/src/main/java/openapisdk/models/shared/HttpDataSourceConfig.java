package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpDataSourceConfig
 * Describes an HTTP data source configuration.
**/
public class HttpDataSourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationConfig")
    public AuthorizationConfig authorizationConfig;
    public HttpDataSourceConfig withAuthorizationConfig(AuthorizationConfig authorizationConfig) {
        this.authorizationConfig = authorizationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;
    public HttpDataSourceConfig withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}