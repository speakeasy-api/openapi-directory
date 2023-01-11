package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GovidRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public GovidRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public GovidRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("REGNO")
    public String regno;
    public GovidRequestBodyCertificateParameters withRegno(String regno) {
        this.regno = regno;
        return this;
    }
}