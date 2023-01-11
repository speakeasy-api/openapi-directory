package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateSummary
 * This structure is returned in the response object of <a>ListCertificates</a> action. 
**/
public class CertificateSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public CertificateSummary withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainName")
    public String domainName;
    public CertificateSummary withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}