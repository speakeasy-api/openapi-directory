package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportCertificateAuthorityCertificateRequest {
    @JsonProperty("Certificate")
    public String certificate;
    public ImportCertificateAuthorityCertificateRequest withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonProperty("CertificateAuthorityArn")
    public String certificateAuthorityArn;
    public ImportCertificateAuthorityCertificateRequest withCertificateAuthorityArn(String certificateAuthorityArn) {
        this.certificateAuthorityArn = certificateAuthorityArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateChain")
    public String certificateChain;
    public ImportCertificateAuthorityCertificateRequest withCertificateChain(String certificateChain) {
        this.certificateChain = certificateChain;
        return this;
    }
}