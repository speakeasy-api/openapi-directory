package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SvcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public SvcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
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
    @JsonProperty("RROLL_CODE")
    public String rrollCODE;
    public SvcerRequestBodyCertificateParameters withRrollCode(String rrollCODE) {
        this.rrollCODE = rrollCODE;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public SvcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}