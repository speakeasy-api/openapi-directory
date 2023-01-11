package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HmipcRequestBodyCertificateParameters {
    @JsonProperty("PolicyNo")
    public String policyNo;
    public HmipcRequestBodyCertificateParameters withPolicyNo(String policyNo) {
        this.policyNo = policyNo;
        return this;
    }
    @JsonProperty("Val")
    public String val;
    public HmipcRequestBodyCertificateParameters withVal(String val) {
        this.val = val;
        return this;
    }
    @JsonProperty("Verification")
    public String verification;
    public HmipcRequestBodyCertificateParameters withVerification(String verification) {
        this.verification = verification;
        return this;
    }
}