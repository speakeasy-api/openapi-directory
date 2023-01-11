package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUserPoolDomainRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomDomainConfig")
    public CustomDomainConfigType customDomainConfig;
    public CreateUserPoolDomainRequest withCustomDomainConfig(CustomDomainConfigType customDomainConfig) {
        this.customDomainConfig = customDomainConfig;
        return this;
    }
    @JsonProperty("Domain")
    public String domain;
    public CreateUserPoolDomainRequest withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public CreateUserPoolDomainRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}