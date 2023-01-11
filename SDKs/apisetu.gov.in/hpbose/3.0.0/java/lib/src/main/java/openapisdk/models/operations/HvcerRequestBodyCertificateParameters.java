package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HvcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public HvcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public HvcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("ROLL")
    public String roll;
    public HvcerRequestBodyCertificateParameters withRoll(String roll) {
        this.roll = roll;
        return this;
    }
    @JsonProperty("YOP")
    public String yop;
    public HvcerRequestBodyCertificateParameters withYop(String yop) {
        this.yop = yop;
        return this;
    }
}