package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SscerRequestBodyCertificateParameters {
    @JsonProperty("CNAME")
    public String cname;
    public SscerRequestBodyCertificateParameters withCname(String cname) {
        this.cname = cname;
        return this;
    }
    @JsonProperty("ROLL")
    public String roll;
    public SscerRequestBodyCertificateParameters withRoll(String roll) {
        this.roll = roll;
        return this;
    }
    @JsonProperty("YEAR")
    public String year;
    public SscerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}