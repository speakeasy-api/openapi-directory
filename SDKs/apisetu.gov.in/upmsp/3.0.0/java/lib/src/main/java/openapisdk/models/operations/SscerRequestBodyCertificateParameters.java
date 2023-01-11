package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SscerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public SscerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public SscerRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public SscerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}