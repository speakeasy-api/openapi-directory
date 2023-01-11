package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HscerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public HscerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("exsession")
    public String exsession;
    public HscerRequestBodyCertificateParameters withExsession(String exsession) {
        this.exsession = exsession;
        return this;
    }
    @JsonProperty("rollnumber")
    public String rollnumber;
    public HscerRequestBodyCertificateParameters withRollnumber(String rollnumber) {
        this.rollnumber = rollnumber;
        return this;
    }
    @JsonProperty("totalmarks")
    public String totalmarks;
    public HscerRequestBodyCertificateParameters withTotalmarks(String totalmarks) {
        this.totalmarks = totalmarks;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public HscerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}