package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObcerRequestBodyCertificateParameters {
    @JsonProperty("CertificateNumber")
    public String certificateNumber;
    public ObcerRequestBodyCertificateParameters withCertificateNumber(String certificateNumber) {
        this.certificateNumber = certificateNumber;
        return this;
    }
}