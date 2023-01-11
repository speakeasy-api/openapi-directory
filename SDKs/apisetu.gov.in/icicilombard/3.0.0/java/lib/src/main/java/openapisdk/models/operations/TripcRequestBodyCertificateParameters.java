package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TripcRequestBodyCertificateParameters {
    @JsonProperty("InsuredDob")
    public String insuredDob;
    public TripcRequestBodyCertificateParameters withInsuredDob(String insuredDob) {
        this.insuredDob = insuredDob;
        return this;
    }
    @JsonProperty("PolicyNo")
    public String policyNo;
    public TripcRequestBodyCertificateParameters withPolicyNo(String policyNo) {
        this.policyNo = policyNo;
        return this;
    }
}