package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HsmgrRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public HsmgrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RROLL")
    public String rroll;
    public HsmgrRequestBodyCertificateParameters withRroll(String rroll) {
        this.rroll = rroll;
        return this;
    }
    @JsonProperty("YEAR")
    public String year;
    public HsmgrRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}