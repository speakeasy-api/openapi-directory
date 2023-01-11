package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DpcerRequestBodyCertificateParameters {
    @JsonProperty("CertificateNumber")
    public String certificateNumber;
    public DpcerRequestBodyCertificateParameters withCertificateNumber(String certificateNumber) {
        this.certificateNumber = certificateNumber;
        return this;
    }
}