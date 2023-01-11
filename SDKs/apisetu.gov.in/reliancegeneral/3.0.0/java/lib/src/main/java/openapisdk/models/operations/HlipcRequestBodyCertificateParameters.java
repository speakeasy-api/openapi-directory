package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HlipcRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public HlipcRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public HlipcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("GENDER")
    public String gender;
    public HlipcRequestBodyCertificateParameters withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonProperty("PolicyNo")
    public String policyNo;
    public HlipcRequestBodyCertificateParameters withPolicyNo(String policyNo) {
        this.policyNo = policyNo;
        return this;
    }
    @JsonProperty("PolicyType")
    public String policyType;
    public HlipcRequestBodyCertificateParameters withPolicyType(String policyType) {
        this.policyType = policyType;
        return this;
    }
}