package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NsescRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public NsescRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public NsescRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public NsescRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}