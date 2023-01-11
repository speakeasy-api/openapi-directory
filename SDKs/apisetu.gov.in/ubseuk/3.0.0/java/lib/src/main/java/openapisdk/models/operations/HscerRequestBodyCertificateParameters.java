package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HscerRequestBodyCertificateParameters {
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
    @JsonProperty("UID")
    public String uid;
    public HscerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("YEAR")
    public String year;
    public HscerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}