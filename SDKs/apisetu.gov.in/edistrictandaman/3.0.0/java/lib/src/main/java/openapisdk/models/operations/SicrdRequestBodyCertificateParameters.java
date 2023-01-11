package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SicrdRequestBodyCertificateParameters {
    @JsonProperty("CertificateNumber")
    public String certificateNumber;
    public SicrdRequestBodyCertificateParameters withCertificateNumber(String certificateNumber) {
        this.certificateNumber = certificateNumber;
        return this;
    }
}