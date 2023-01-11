package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LicerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public LicerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public LicerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("policyNo")
    public String policyNo;
    public LicerRequestBodyCertificateParameters withPolicyNo(String policyNo) {
        this.policyNo = policyNo;
        return this;
    }
}