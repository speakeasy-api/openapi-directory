package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TwipcRequestBodyCertificateParameters {
    @JsonProperty("InsuredDob")
    public String insuredDob;
    public TwipcRequestBodyCertificateParameters withInsuredDob(String insuredDob) {
        this.insuredDob = insuredDob;
        return this;
    }
    @JsonProperty("PolicyNo")
    public String policyNo;
    public TwipcRequestBodyCertificateParameters withPolicyNo(String policyNo) {
        this.policyNo = policyNo;
        return this;
    }
}