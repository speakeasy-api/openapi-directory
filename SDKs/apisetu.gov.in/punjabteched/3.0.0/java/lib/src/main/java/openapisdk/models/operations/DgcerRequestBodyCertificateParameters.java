package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DgcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public DgcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RegistrationNo")
    public String registrationNo;
    public DgcerRequestBodyCertificateParameters withRegistrationNo(String registrationNo) {
        this.registrationNo = registrationNo;
        return this;
    }
}