package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LccepRequestBodyCertificateParameters {
    @JsonProperty("CertificateNumber")
    public String certificateNumber;
    public LccepRequestBodyCertificateParameters withCertificateNumber(String certificateNumber) {
        this.certificateNumber = certificateNumber;
        return this;
    }
}