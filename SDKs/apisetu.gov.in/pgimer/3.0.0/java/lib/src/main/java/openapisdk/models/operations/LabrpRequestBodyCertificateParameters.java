package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LabrpRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public LabrpRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public LabrpRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("GENDER")
    public String gender;
    public LabrpRequestBodyCertificateParameters withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonProperty("MobileNoRQ")
    public String mobileNoRQ;
    public LabrpRequestBodyCertificateParameters withMobileNoRq(String mobileNoRQ) {
        this.mobileNoRQ = mobileNoRQ;
        return this;
    }
}