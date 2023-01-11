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
    @JsonProperty("ROLL")
    public String roll;
    public SvcerRequestBodyCertificateParameters withRoll(String roll) {
        this.roll = roll;
        return this;
    }
    @JsonProperty("YOP")
    public String yop;
    public SvcerRequestBodyCertificateParameters withYop(String yop) {
        this.yop = yop;
        return this;
    }
}