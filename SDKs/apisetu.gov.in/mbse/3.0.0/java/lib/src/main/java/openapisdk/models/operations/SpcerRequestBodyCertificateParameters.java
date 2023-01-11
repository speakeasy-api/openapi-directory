package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SpcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public SpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RROLL")
    public String rroll;
    public SpcerRequestBodyCertificateParameters withRroll(String rroll) {
        this.rroll = rroll;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public SpcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}