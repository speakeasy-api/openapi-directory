package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CvipcRequestBodyCertificateParameters {
    @JsonProperty("PolicyNo")
    public String policyNo;
    public CvipcRequestBodyCertificateParameters withPolicyNo(String policyNo) {
        this.policyNo = policyNo;
        return this;
    }
    @JsonProperty("Val")
    public String val;
    public CvipcRequestBodyCertificateParameters withVal(String val) {
        this.val = val;
        return this;
    }
    @JsonProperty("Verification")
    public String verification;
    public CvipcRequestBodyCertificateParameters withVerification(String verification) {
        this.verification = verification;
        return this;
    }
}