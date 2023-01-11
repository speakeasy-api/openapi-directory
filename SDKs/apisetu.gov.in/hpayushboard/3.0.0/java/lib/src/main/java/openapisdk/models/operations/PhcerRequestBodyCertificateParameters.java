package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PhcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public PhcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RegistrationNo")
    public String registrationNo;
    public PhcerRequestBodyCertificateParameters withRegistrationNo(String registrationNo) {
        this.registrationNo = registrationNo;
        return this;
    }
}