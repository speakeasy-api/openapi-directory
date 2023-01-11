package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCertificateAuthorityCsrRequest {
    @JsonProperty("CertificateAuthorityArn")
    public String certificateAuthorityArn;
    public GetCertificateAuthorityCsrRequest withCertificateAuthorityArn(String certificateAuthorityArn) {
        this.certificateAuthorityArn = certificateAuthorityArn;
        return this;
    }
}