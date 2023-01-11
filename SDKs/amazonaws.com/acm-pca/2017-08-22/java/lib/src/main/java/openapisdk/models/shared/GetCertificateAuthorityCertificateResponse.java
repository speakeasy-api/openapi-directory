package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCertificateAuthorityCertificateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Certificate")
    public String certificate;
    public GetCertificateAuthorityCertificateResponse withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateChain")
    public String certificateChain;
    public GetCertificateAuthorityCertificateResponse withCertificateChain(String certificateChain) {
        this.certificateChain = certificateChain;
        return this;
    }
}