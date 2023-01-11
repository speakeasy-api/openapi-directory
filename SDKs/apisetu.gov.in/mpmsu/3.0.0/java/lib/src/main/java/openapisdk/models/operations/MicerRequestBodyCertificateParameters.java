package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MicerRequestBodyCertificateParameters {
    @JsonProperty("APPNO")
    public String appno;
    public MicerRequestBodyCertificateParameters withAppno(String appno) {
        this.appno = appno;
        return this;
    }
    @JsonProperty("Date_Of_Birth")
    public String dateOfBirth;
    public MicerRequestBodyCertificateParameters withDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonProperty("ENROLNO")
    public String enrolno;
    public MicerRequestBodyCertificateParameters withEnrolno(String enrolno) {
        this.enrolno = enrolno;
        return this;
    }
    @JsonProperty("ROLLNO")
    public String rollno;
    public MicerRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
}