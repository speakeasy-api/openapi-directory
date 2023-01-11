package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NdcerRequestBodyCertificateParameters {
    @JsonProperty("CertificateNumber")
    public String certificateNumber;
    public NdcerRequestBodyCertificateParameters withCertificateNumber(String certificateNumber) {
        this.certificateNumber = certificateNumber;
        return this;
    }
}