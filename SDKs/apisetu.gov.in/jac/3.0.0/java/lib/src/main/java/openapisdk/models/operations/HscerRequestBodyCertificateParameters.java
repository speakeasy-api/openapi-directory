package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HscerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public HscerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollcode")
    public String rollcode;
    public HscerRequestBodyCertificateParameters withRollcode(String rollcode) {
        this.rollcode = rollcode;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public HscerRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public HscerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}