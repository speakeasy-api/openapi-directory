package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TpcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public TpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("Registration")
    public String registration;
    public TpcerRequestBodyCertificateParameters withRegistration(String registration) {
        this.registration = registration;
        return this;
    }
}