package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SktscRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public SktscRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public SktscRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public SktscRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}