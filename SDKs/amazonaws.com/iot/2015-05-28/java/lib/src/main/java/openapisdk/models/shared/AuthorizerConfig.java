package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthorizerConfig
 * An object that specifies the authorization service for a domain.
**/
public class AuthorizerConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowAuthorizerOverride")
    public Boolean allowAuthorizerOverride;
    public AuthorizerConfig withAllowAuthorizerOverride(Boolean allowAuthorizerOverride) {
        this.allowAuthorizerOverride = allowAuthorizerOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAuthorizerName")
    public String defaultAuthorizerName;
    public AuthorizerConfig withDefaultAuthorizerName(String defaultAuthorizerName) {
        this.defaultAuthorizerName = defaultAuthorizerName;
        return this;
    }
}