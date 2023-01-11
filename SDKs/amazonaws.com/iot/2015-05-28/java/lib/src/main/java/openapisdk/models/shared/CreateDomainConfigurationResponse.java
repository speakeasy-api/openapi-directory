package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDomainConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainConfigurationArn")
    public String domainConfigurationArn;
    public CreateDomainConfigurationResponse withDomainConfigurationArn(String domainConfigurationArn) {
        this.domainConfigurationArn = domainConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainConfigurationName")
    public String domainConfigurationName;
    public CreateDomainConfigurationResponse withDomainConfigurationName(String domainConfigurationName) {
        this.domainConfigurationName = domainConfigurationName;
        return this;
    }
}