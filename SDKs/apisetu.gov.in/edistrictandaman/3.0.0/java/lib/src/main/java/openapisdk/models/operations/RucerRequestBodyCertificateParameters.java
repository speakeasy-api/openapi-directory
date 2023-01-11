package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RucerRequestBodyCertificateParameters {
    @JsonProperty("CertificateNumber")
    public String certificateNumber;
    public RucerRequestBodyCertificateParameters withCertificateNumber(String certificateNumber) {
        this.certificateNumber = certificateNumber;
        return this;
    }
}