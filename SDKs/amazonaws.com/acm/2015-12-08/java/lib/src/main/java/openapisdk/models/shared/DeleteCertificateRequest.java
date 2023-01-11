package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCertificateRequest {
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public DeleteCertificateRequest withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
}