package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainValidation
 * Contains information about the validation of each domain name in the certificate.
**/
public class DomainValidation {
    @JsonProperty("DomainName")
    public String domainName;
    public DomainValidation withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceRecord")
    public ResourceRecord resourceRecord;
    public DomainValidation withResourceRecord(ResourceRecord resourceRecord) {
        this.resourceRecord = resourceRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationDomain")
    public String validationDomain;
    public DomainValidation withValidationDomain(String validationDomain) {
        this.validationDomain = validationDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationEmails")
    public String[] validationEmails;
    public DomainValidation withValidationEmails(String[] validationEmails) {
        this.validationEmails = validationEmails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationMethod")
    public ValidationMethodEnum validationMethod;
    public DomainValidation withValidationMethod(ValidationMethodEnum validationMethod) {
        this.validationMethod = validationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationStatus")
    public DomainStatusEnum validationStatus;
    public DomainValidation withValidationStatus(DomainStatusEnum validationStatus) {
        this.validationStatus = validationStatus;
        return this;
    }
}