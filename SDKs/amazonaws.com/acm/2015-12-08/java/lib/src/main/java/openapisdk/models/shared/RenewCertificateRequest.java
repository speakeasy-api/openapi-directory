package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RenewCertificateRequest {
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public RenewCertificateRequest withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
}