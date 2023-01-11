package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GicerRequestBodyCertificateParameters {
    @JsonProperty("PolicyNo")
    public String policyNo;
    public GicerRequestBodyCertificateParameters withPolicyNo(String policyNo) {
        this.policyNo = policyNo;
        return this;
    }
    @JsonProperty("Val")
    public String val;
    public GicerRequestBodyCertificateParameters withVal(String val) {
        this.val = val;
        return this;
    }
    @JsonProperty("Verification")
    public String verification;
    public GicerRequestBodyCertificateParameters withVerification(String verification) {
        this.verification = verification;
        return this;
    }
}