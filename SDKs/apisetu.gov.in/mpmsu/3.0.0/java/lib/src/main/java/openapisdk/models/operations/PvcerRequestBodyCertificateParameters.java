package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PvcerRequestBodyCertificateParameters {
    @JsonProperty("APPNO")
    public String appno;
    public PvcerRequestBodyCertificateParameters withAppno(String appno) {
        this.appno = appno;
        return this;
    }
    @JsonProperty("Date_Of_Birth")
    public String dateOfBirth;
    public PvcerRequestBodyCertificateParameters withDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonProperty("ENROLNO")
    public String enrolno;
    public PvcerRequestBodyCertificateParameters withEnrolno(String enrolno) {
        this.enrolno = enrolno;
        return this;
    }
    @JsonProperty("ROLLNO")
    public String rollno;
    public PvcerRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
}