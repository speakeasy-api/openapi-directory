package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SvcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public SvcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RROLL")
    public String rroll;
    public SvcerRequestBodyCertificateParameters withRroll(String rroll) {
        this.rroll = rroll;
        return this;
    }
    @JsonProperty("YEAR")
    public String year;
    public SvcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}