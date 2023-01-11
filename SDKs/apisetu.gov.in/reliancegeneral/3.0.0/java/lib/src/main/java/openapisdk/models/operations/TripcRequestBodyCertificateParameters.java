package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TripcRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public TripcRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public TripcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("GENDER")
    public String gender;
    public TripcRequestBodyCertificateParameters withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonProperty("PolicyNo")
    public String policyNo;
    public TripcRequestBodyCertificateParameters withPolicyNo(String policyNo) {
        this.policyNo = policyNo;
        return this;
    }
    @JsonProperty("PolicyType")
    public String policyType;
    public TripcRequestBodyCertificateParameters withPolicyType(String policyType) {
        this.policyType = policyType;
        return this;
    }
}