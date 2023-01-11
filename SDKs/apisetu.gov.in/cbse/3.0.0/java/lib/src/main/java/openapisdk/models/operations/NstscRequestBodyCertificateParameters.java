package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NstscRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public NstscRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public NstscRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public NstscRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}