package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NtltrRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public NtltrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public NtltrRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public NtltrRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}