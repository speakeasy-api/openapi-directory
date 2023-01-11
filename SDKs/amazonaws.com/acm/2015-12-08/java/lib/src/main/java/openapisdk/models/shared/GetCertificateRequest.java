package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCertificateRequest {
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public GetCertificateRequest withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
}