package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HsmgrRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public HsmgrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public HsmgrRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public HsmgrRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}