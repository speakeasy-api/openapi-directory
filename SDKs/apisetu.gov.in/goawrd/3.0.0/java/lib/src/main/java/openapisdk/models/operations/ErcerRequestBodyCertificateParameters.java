package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ErcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public ErcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("Registration")
    public String registration;
    public ErcerRequestBodyCertificateParameters withRegistration(String registration) {
        this.registration = registration;
        return this;
    }
}