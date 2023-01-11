package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HscerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public HscerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RROLL")
    public String rroll;
    public HscerRequestBodyCertificateParameters withRroll(String rroll) {
        this.rroll = rroll;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public HscerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}