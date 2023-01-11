package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HscerRequestBodyCertificateParameters {
    @JsonProperty("CNAME")
    public String cname;
    public HscerRequestBodyCertificateParameters withCname(String cname) {
        this.cname = cname;
        return this;
    }
    @JsonProperty("ROLL")
    public String roll;
    public HscerRequestBodyCertificateParameters withRoll(String roll) {
        this.roll = roll;
        return this;
    }
    @JsonProperty("YEAR")
    public String year;
    public HscerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}