package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CripcRequestBodyCertificateParameters {
    @JsonProperty("InsuredDob")
    public String insuredDob;
    public CripcRequestBodyCertificateParameters withInsuredDob(String insuredDob) {
        this.insuredDob = insuredDob;
        return this;
    }
    @JsonProperty("PolicyNo")
    public String policyNo;
    public CripcRequestBodyCertificateParameters withPolicyNo(String policyNo) {
        this.policyNo = policyNo;
        return this;
    }
}