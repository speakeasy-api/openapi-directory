package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TripcRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public TripcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("policyno")
    public String policyno;
    public TripcRequestBodyCertificateParameters withPolicyno(String policyno) {
        this.policyno = policyno;
        return this;
    }
}