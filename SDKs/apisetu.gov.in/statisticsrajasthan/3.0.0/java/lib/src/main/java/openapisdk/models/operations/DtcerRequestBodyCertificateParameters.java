package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DtcerRequestBodyCertificateParameters {
    @JsonProperty("DateofEvent")
    public String dateofEvent;
    public DtcerRequestBodyCertificateParameters withDateofEvent(String dateofEvent) {
        this.dateofEvent = dateofEvent;
        return this;
    }
    @JsonProperty("RegisNumber")
    public String regisNumber;
    public DtcerRequestBodyCertificateParameters withRegisNumber(String regisNumber) {
        this.regisNumber = regisNumber;
        return this;
    }
    @JsonProperty("Year")
    public String year;
    public DtcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}