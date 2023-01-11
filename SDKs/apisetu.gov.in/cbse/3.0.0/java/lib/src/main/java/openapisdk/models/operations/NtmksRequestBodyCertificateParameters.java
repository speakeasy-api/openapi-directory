package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NtmksRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public NtmksRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public NtmksRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public NtmksRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}