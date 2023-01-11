package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PodocRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public PodocRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("PolicyNumber")
    public String policyNumber;
    public PodocRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
}