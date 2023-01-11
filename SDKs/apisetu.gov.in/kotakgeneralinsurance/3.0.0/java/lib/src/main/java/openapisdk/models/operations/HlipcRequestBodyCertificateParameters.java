package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HlipcRequestBodyCertificateParameters {
    @JsonProperty("PolicyNo")
    public String policyNo;
    public HlipcRequestBodyCertificateParameters withPolicyNo(String policyNo) {
        this.policyNo = policyNo;
        return this;
    }
    @JsonProperty("Val")
    public String val;
    public HlipcRequestBodyCertificateParameters withVal(String val) {
        this.val = val;
        return this;
    }
    @JsonProperty("Verification")
    public String verification;
    public HlipcRequestBodyCertificateParameters withVerification(String verification) {
        this.verification = verification;
        return this;
    }
}