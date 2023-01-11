package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCertificateManagerCertificateDomainValidationOption
 * <p>Contains information about one of the following:</p> <ul> <li> <p>The initial validation of each domain name that occurs as a result of the <code>RequestCertificate</code> request</p> </li> <li> <p>The validation of each domain name in the certificate, as it pertains to Certificate Manager managed renewal</p> </li> </ul>
**/
public class AwsCertificateManagerCertificateDomainValidationOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainName")
    public String domainName;
    public AwsCertificateManagerCertificateDomainValidationOption withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceRecord")
    public AwsCertificateManagerCertificateResourceRecord resourceRecord;
    public AwsCertificateManagerCertificateDomainValidationOption withResourceRecord(AwsCertificateManagerCertificateResourceRecord resourceRecord) {
        this.resourceRecord = resourceRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationDomain")
    public String validationDomain;
    public AwsCertificateManagerCertificateDomainValidationOption withValidationDomain(String validationDomain) {
        this.validationDomain = validationDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationEmails")
    public String[] validationEmails;
    public AwsCertificateManagerCertificateDomainValidationOption withValidationEmails(String[] validationEmails) {
        this.validationEmails = validationEmails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationMethod")
    public String validationMethod;
    public AwsCertificateManagerCertificateDomainValidationOption withValidationMethod(String validationMethod) {
        this.validationMethod = validationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationStatus")
    public String validationStatus;
    public AwsCertificateManagerCertificateDomainValidationOption withValidationStatus(String validationStatus) {
        this.validationStatus = validationStatus;
        return this;
    }
}