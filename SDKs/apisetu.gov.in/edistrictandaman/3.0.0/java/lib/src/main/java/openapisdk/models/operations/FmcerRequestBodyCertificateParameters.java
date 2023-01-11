package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FmcerRequestBodyCertificateParameters {
    @JsonProperty("CertificateNumber")
    public String certificateNumber;
    public FmcerRequestBodyCertificateParameters withCertificateNumber(String certificateNumber) {
        this.certificateNumber = certificateNumber;
        return this;
    }
}