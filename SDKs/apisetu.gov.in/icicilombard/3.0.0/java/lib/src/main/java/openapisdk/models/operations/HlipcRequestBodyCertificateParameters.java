package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HlipcRequestBodyCertificateParameters {
    @JsonProperty("InsuredDob")
    public String insuredDob;
    public HlipcRequestBodyCertificateParameters withInsuredDob(String insuredDob) {
        this.insuredDob = insuredDob;
        return this;
    }
    @JsonProperty("PolicyNo")
    public String policyNo;
    public HlipcRequestBodyCertificateParameters withPolicyNo(String policyNo) {
        this.policyNo = policyNo;
        return this;
    }
}