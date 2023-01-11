package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SkmstRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public SkmstRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public SkmstRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RollNumber")
    public String rollNumber;
    public SkmstRequestBodyCertificateParameters withRollNumber(String rollNumber) {
        this.rollNumber = rollNumber;
        return this;
    }
    @JsonProperty("Sem")
    public String sem;
    public SkmstRequestBodyCertificateParameters withSem(String sem) {
        this.sem = sem;
        return this;
    }
    @JsonProperty("Session")
    public String session;
    public SkmstRequestBodyCertificateParameters withSession(String session) {
        this.session = session;
        return this;
    }
}