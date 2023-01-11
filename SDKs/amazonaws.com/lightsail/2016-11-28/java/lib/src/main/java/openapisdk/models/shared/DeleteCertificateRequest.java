package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCertificateRequest {
    @JsonProperty("certificateName")
    public String certificateName;
    public DeleteCertificateRequest withCertificateName(String certificateName) {
        this.certificateName = certificateName;
        return this;
    }
}