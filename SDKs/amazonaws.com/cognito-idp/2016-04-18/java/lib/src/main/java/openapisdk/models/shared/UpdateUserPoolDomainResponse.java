package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateUserPoolDomainResponse
 * The UpdateUserPoolDomain response output.
**/
public class UpdateUserPoolDomainResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudFrontDomain")
    public String cloudFrontDomain;
    public UpdateUserPoolDomainResponse withCloudFrontDomain(String cloudFrontDomain) {
        this.cloudFrontDomain = cloudFrontDomain;
        return this;
    }
}