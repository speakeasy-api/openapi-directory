package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CvipcRequestBodyCertificateParameters {
    @JsonProperty("InsuredDob")
    public String insuredDob;
    public CvipcRequestBodyCertificateParameters withInsuredDob(String insuredDob) {
        this.insuredDob = insuredDob;
        return this;
    }
    @JsonProperty("PolicyNo")
    public String policyNo;
    public CvipcRequestBodyCertificateParameters withPolicyNo(String policyNo) {
        this.policyNo = policyNo;
        return this;
    }
}