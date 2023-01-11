package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDomainConfigurationRequestBodyAuthorizerConfig
 * An object that specifies the authorization service for a domain.
**/
public class UpdateDomainConfigurationRequestBodyAuthorizerConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowAuthorizerOverride")
    public Boolean allowAuthorizerOverride;
    public UpdateDomainConfigurationRequestBodyAuthorizerConfig withAllowAuthorizerOverride(Boolean allowAuthorizerOverride) {
        this.allowAuthorizerOverride = allowAuthorizerOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAuthorizerName")
    public String defaultAuthorizerName;
    public UpdateDomainConfigurationRequestBodyAuthorizerConfig withDefaultAuthorizerName(String defaultAuthorizerName) {
        this.defaultAuthorizerName = defaultAuthorizerName;
        return this;
    }
}