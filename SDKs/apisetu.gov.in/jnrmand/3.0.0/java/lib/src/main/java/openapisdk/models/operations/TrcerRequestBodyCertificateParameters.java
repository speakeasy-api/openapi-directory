package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TrcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public TrcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public TrcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("REG_NO")
    public String regNO;
    public TrcerRequestBodyCertificateParameters withRegNo(String regNO) {
        this.regNO = regNO;
        return this;
    }
}