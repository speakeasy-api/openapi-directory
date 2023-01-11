package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDomainConfigurationRequestBodyAuthorizerConfig
 * An object that specifies the authorization service for a domain.
**/
public class CreateDomainConfigurationRequestBodyAuthorizerConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowAuthorizerOverride")
    public Boolean allowAuthorizerOverride;
    public CreateDomainConfigurationRequestBodyAuthorizerConfig withAllowAuthorizerOverride(Boolean allowAuthorizerOverride) {
        this.allowAuthorizerOverride = allowAuthorizerOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAuthorizerName")
    public String defaultAuthorizerName;
    public CreateDomainConfigurationRequestBodyAuthorizerConfig withDefaultAuthorizerName(String defaultAuthorizerName) {
        this.defaultAuthorizerName = defaultAuthorizerName;
        return this;
    }
}