package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateSummary
 * Describes an Amazon Lightsail SSL/TLS certificate.
**/
public class CertificateSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateArn")
    public String certificateArn;
    public CertificateSummary withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateDetail")
    public Certificate certificateDetail;
    public CertificateSummary withCertificateDetail(Certificate certificateDetail) {
        this.certificateDetail = certificateDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateName")
    public String certificateName;
    public CertificateSummary withCertificateName(String certificateName) {
        this.certificateName = certificateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public CertificateSummary withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CertificateSummary withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}