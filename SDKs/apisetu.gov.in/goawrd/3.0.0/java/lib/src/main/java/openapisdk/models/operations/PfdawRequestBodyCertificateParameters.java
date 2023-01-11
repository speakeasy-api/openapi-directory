package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PfdawRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public PfdawRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("Registration")
    public String registration;
    public PfdawRequestBodyCertificateParameters withRegistration(String registration) {
        this.registration = registration;
        return this;
    }
}