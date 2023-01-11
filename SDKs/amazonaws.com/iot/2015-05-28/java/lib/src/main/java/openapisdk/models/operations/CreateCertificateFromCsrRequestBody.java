package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCertificateFromCsrRequestBody {
    @JsonProperty("certificateSigningRequest")
    public String certificateSigningRequest;
    public CreateCertificateFromCsrRequestBody withCertificateSigningRequest(String certificateSigningRequest) {
        this.certificateSigningRequest = certificateSigningRequest;
        return this;
    }
}