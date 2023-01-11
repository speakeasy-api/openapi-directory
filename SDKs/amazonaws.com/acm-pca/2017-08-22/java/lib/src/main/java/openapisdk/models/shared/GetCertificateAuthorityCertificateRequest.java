package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCertificateAuthorityCertificateRequest {
    @JsonProperty("CertificateAuthorityArn")
    public String certificateAuthorityArn;
    public GetCertificateAuthorityCertificateRequest withCertificateAuthorityArn(String certificateAuthorityArn) {
        this.certificateAuthorityArn = certificateAuthorityArn;
        return this;
    }
}