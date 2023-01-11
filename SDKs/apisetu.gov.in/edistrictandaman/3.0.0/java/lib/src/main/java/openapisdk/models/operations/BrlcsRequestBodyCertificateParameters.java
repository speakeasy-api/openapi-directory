package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BrlcsRequestBodyCertificateParameters {
    @JsonProperty("CertificateNumber")
    public String certificateNumber;
    public BrlcsRequestBodyCertificateParameters withCertificateNumber(String certificateNumber) {
        this.certificateNumber = certificateNumber;
        return this;
    }
}