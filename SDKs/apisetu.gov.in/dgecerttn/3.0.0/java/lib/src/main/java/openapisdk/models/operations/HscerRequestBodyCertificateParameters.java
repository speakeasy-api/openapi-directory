package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HscerRequestBodyCertificateParameters {
    @JsonProperty("CertificateType")
    public String certificateType;
    public HscerRequestBodyCertificateParameters withCertificateType(String certificateType) {
        this.certificateType = certificateType;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public HscerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
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
    @JsonProperty("month")
    public String month;
    public HscerRequestBodyCertificateParameters withMonth(String month) {
        this.month = month;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public HscerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}