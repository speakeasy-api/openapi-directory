package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RmcerRequestBodyCertificateParameters {
    @JsonProperty("DateofEvent")
    public String dateofEvent;
    public RmcerRequestBodyCertificateParameters withDateofEvent(String dateofEvent) {
        this.dateofEvent = dateofEvent;
        return this;
    }
    @JsonProperty("RegisNumber")
    public String regisNumber;
    public RmcerRequestBodyCertificateParameters withRegisNumber(String regisNumber) {
        this.regisNumber = regisNumber;
        return this;
    }
    @JsonProperty("Year")
    public String year;
    public RmcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}