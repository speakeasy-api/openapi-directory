package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SscerRequestBodyCertificateParameters {
    @JsonProperty("Cent")
    public String cent;
    public SscerRequestBodyCertificateParameters withCent(String cent) {
        this.cent = cent;
        return this;
    }
    @JsonProperty("MName")
    public String mName;
    public SscerRequestBodyCertificateParameters withMName(String mName) {
        this.mName = mName;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public SscerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RROLL")
    public String rroll;
    public SscerRequestBodyCertificateParameters withRroll(String rroll) {
        this.rroll = rroll;
        return this;
    }
    @JsonProperty("YEAR")
    public String year;
    public SscerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}