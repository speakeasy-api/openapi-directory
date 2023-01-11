package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CripcRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public CripcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("PolicyNumber")
    public String policyNumber;
    public CripcRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
}