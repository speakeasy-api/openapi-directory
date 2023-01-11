package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HvcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public HvcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RROLL")
    public String rroll;
    public HvcerRequestBodyCertificateParameters withRroll(String rroll) {
        this.rroll = rroll;
        return this;
    }
    @JsonProperty("YEAR")
    public String year;
    public HvcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}