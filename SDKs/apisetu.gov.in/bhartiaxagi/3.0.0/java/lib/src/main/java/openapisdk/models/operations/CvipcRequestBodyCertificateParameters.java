package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CvipcRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public CvipcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("PolicyNumber")
    public String policyNumber;
    public CvipcRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
}