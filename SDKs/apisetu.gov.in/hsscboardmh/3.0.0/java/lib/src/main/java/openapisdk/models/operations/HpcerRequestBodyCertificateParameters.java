package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HpcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public HpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("exsession")
    public String exsession;
    public HpcerRequestBodyCertificateParameters withExsession(String exsession) {
        this.exsession = exsession;
        return this;
    }
    @JsonProperty("rollnumber")
    public String rollnumber;
    public HpcerRequestBodyCertificateParameters withRollnumber(String rollnumber) {
        this.rollnumber = rollnumber;
        return this;
    }
    @JsonProperty("totalmarks")
    public String totalmarks;
    public HpcerRequestBodyCertificateParameters withTotalmarks(String totalmarks) {
        this.totalmarks = totalmarks;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public HpcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}