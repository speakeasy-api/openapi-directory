package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CyipcRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public CyipcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("policy_number")
    public String policyNumber;
    public CyipcRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
}