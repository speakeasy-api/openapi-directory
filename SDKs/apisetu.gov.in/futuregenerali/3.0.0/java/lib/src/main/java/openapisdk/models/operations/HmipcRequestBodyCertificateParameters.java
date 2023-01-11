package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HmipcRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public HmipcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("policyno")
    public String policyno;
    public HmipcRequestBodyCertificateParameters withPolicyno(String policyno) {
        this.policyno = policyno;
        return this;
    }
}