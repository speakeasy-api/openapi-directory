package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TwipcRequestBodyCertificateParameters {
    @JsonProperty("PolicyNo")
    public String policyNo;
    public TwipcRequestBodyCertificateParameters withPolicyNo(String policyNo) {
        this.policyNo = policyNo;
        return this;
    }
    @JsonProperty("Val")
    public String val;
    public TwipcRequestBodyCertificateParameters withVal(String val) {
        this.val = val;
        return this;
    }
    @JsonProperty("Verification")
    public String verification;
    public TwipcRequestBodyCertificateParameters withVerification(String verification) {
        this.verification = verification;
        return this;
    }
}