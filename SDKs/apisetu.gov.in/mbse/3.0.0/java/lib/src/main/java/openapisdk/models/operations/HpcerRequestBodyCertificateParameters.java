package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HpcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public HpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RROLL")
    public String rroll;
    public HpcerRequestBodyCertificateParameters withRroll(String rroll) {
        this.rroll = rroll;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public HpcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}