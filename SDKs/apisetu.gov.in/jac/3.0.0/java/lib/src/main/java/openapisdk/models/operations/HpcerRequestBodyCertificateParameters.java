package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HpcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public HpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollcode")
    public String rollcode;
    public HpcerRequestBodyCertificateParameters withRollcode(String rollcode) {
        this.rollcode = rollcode;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public HpcerRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public HpcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}