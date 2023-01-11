package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SkhscRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public SkhscRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public SkhscRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public SkhscRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}