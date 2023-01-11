package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SscerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public SscerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("exsession")
    public String exsession;
    public SscerRequestBodyCertificateParameters withExsession(String exsession) {
        this.exsession = exsession;
        return this;
    }
    @JsonProperty("rollnumber")
    public String rollnumber;
    public SscerRequestBodyCertificateParameters withRollnumber(String rollnumber) {
        this.rollnumber = rollnumber;
        return this;
    }
    @JsonProperty("totalmarks")
    public String totalmarks;
    public SscerRequestBodyCertificateParameters withTotalmarks(String totalmarks) {
        this.totalmarks = totalmarks;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public SscerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}