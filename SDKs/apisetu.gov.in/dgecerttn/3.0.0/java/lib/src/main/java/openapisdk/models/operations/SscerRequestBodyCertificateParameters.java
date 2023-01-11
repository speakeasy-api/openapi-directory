package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SscerRequestBodyCertificateParameters {
    @JsonProperty("CertificateType")
    public String certificateType;
    public SscerRequestBodyCertificateParameters withCertificateType(String certificateType) {
        this.certificateType = certificateType;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public SscerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
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
    @JsonProperty("month")
    public String month;
    public SscerRequestBodyCertificateParameters withMonth(String month) {
        this.month = month;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public SscerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}