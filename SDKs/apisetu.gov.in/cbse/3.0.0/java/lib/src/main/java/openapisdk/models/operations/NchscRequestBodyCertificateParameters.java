package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NchscRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public NchscRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public NchscRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public NchscRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}