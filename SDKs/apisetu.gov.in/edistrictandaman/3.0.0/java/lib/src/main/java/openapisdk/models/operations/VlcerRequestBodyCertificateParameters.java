package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VlcerRequestBodyCertificateParameters {
    @JsonProperty("CertificateNumber")
    public String certificateNumber;
    public VlcerRequestBodyCertificateParameters withCertificateNumber(String certificateNumber) {
        this.certificateNumber = certificateNumber;
        return this;
    }
}