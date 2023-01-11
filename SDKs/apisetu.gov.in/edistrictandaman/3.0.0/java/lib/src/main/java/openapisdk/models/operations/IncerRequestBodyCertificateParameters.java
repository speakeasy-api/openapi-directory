package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IncerRequestBodyCertificateParameters {
    @JsonProperty("CertificateNumber")
    public String certificateNumber;
    public IncerRequestBodyCertificateParameters withCertificateNumber(String certificateNumber) {
        this.certificateNumber = certificateNumber;
        return this;
    }
}