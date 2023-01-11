package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SpcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public SpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public SpcerRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public SpcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}