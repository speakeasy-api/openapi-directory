package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BtcerRequestBodyCertificateParameters {
    @JsonProperty("Cert_Type")
    public String certType;
    public BtcerRequestBodyCertificateParameters withCertType(String certType) {
        this.certType = certType;
        return this;
    }
    @JsonProperty("DateofEvent")
    public String dateofEvent;
    public BtcerRequestBodyCertificateParameters withDateofEvent(String dateofEvent) {
        this.dateofEvent = dateofEvent;
        return this;
    }
    @JsonProperty("RegisNumber")
    public String regisNumber;
    public BtcerRequestBodyCertificateParameters withRegisNumber(String regisNumber) {
        this.regisNumber = regisNumber;
        return this;
    }
    @JsonProperty("Year")
    public String year;
    public BtcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}