package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TwipcRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public TwipcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("policyno")
    public String policyno;
    public TwipcRequestBodyCertificateParameters withPolicyno(String policyno) {
        this.policyno = policyno;
        return this;
    }
}