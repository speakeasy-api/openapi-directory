package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDomainConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerConfig")
    public UpdateDomainConfigurationRequestBodyAuthorizerConfig authorizerConfig;
    public UpdateDomainConfigurationRequestBody withAuthorizerConfig(UpdateDomainConfigurationRequestBodyAuthorizerConfig authorizerConfig) {
        this.authorizerConfig = authorizerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainConfigurationStatus")
    public UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum domainConfigurationStatus;
    public UpdateDomainConfigurationRequestBody withDomainConfigurationStatus(UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum domainConfigurationStatus) {
        this.domainConfigurationStatus = domainConfigurationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeAuthorizerConfig")
    public Boolean removeAuthorizerConfig;
    public UpdateDomainConfigurationRequestBody withRemoveAuthorizerConfig(Boolean removeAuthorizerConfig) {
        this.removeAuthorizerConfig = removeAuthorizerConfig;
        return this;
    }
}