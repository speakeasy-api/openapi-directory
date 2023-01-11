package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MicerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public MicerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public MicerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public MicerRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public MicerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}