package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUserPoolDomainResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudFrontDomain")
    public String cloudFrontDomain;
    public CreateUserPoolDomainResponse withCloudFrontDomain(String cloudFrontDomain) {
        this.cloudFrontDomain = cloudFrontDomain;
        return this;
    }
}