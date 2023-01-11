package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SkcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public SkcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public SkcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RollNumber")
    public String rollNumber;
    public SkcerRequestBodyCertificateParameters withRollNumber(String rollNumber) {
        this.rollNumber = rollNumber;
        return this;
    }
    @JsonProperty("Session")
    public String session;
    public SkcerRequestBodyCertificateParameters withSession(String session) {
        this.session = session;
        return this;
    }
}