package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCertificateMessage {
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public DeleteCertificateMessage withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
}