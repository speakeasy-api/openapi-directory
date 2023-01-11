package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RestoreCertificateAuthorityRequest {
    @JsonProperty("CertificateAuthorityArn")
    public String certificateAuthorityArn;
    public RestoreCertificateAuthorityRequest withCertificateAuthorityArn(String certificateAuthorityArn) {
        this.certificateAuthorityArn = certificateAuthorityArn;
        return this;
    }
}