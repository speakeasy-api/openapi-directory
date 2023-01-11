package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AdcrdRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public AdcrdRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FatherName")
    public String fatherName;
    public AdcrdRequestBodyCertificateParameters withFatherName(String fatherName) {
        this.fatherName = fatherName;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public AdcrdRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
}