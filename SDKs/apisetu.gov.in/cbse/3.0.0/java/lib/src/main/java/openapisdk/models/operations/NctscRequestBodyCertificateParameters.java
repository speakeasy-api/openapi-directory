package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NctscRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public NctscRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public NctscRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public NctscRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}