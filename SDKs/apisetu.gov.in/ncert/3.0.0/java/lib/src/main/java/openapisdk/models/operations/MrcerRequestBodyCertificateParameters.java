package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MrcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public MrcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public MrcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RROLL")
    public String rroll;
    public MrcerRequestBodyCertificateParameters withRroll(String rroll) {
        this.rroll = rroll;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public MrcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}