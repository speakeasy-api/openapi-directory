package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TripcRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public TripcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("policy_number")
    public String policyNumber;
    public TripcRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
}