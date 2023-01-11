package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SpcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public SpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("exsession")
    public String exsession;
    public SpcerRequestBodyCertificateParameters withExsession(String exsession) {
        this.exsession = exsession;
        return this;
    }
    @JsonProperty("rollnumber")
    public String rollnumber;
    public SpcerRequestBodyCertificateParameters withRollnumber(String rollnumber) {
        this.rollnumber = rollnumber;
        return this;
    }
    @JsonProperty("totalmarks")
    public String totalmarks;
    public SpcerRequestBodyCertificateParameters withTotalmarks(String totalmarks) {
        this.totalmarks = totalmarks;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public SpcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}