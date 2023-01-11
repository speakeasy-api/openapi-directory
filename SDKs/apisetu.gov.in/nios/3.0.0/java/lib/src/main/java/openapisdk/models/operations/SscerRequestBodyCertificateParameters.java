package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SscerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public SscerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
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