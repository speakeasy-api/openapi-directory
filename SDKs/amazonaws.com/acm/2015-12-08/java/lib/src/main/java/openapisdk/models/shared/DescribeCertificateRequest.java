package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeCertificateRequest {
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public DescribeCertificateRequest withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
}