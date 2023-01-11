package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SsmgrRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public SsmgrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public SsmgrRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public SsmgrRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}