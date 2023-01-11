package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DomainValidationOption
 * Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership.
**/
public class DomainValidationOption {
    @JsonProperty("DomainName")
    public String domainName;
    public DomainValidationOption withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonProperty("ValidationDomain")
    public String validationDomain;
    public DomainValidationOption withValidationDomain(String validationDomain) {
        this.validationDomain = validationDomain;
        return this;
    }
}