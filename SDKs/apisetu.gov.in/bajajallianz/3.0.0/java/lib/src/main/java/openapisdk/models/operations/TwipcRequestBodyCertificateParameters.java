package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TwipcRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public TwipcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("policy_number")
    public String policyNumber;
    public TwipcRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
}