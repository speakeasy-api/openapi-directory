package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SsmgrRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public SsmgrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RROLL")
    public String rroll;
    public SsmgrRequestBodyCertificateParameters withRroll(String rroll) {
        this.rroll = rroll;
        return this;
    }
    @JsonProperty("YEAR")
    public String year;
    public SsmgrRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}