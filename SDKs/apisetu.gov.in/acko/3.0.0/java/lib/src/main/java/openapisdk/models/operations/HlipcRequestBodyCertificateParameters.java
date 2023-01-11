package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HlipcRequestBodyCertificateParameters {
    @JsonProperty("phoneno")
    public String phoneno;
    public HlipcRequestBodyCertificateParameters withPhoneno(String phoneno) {
        this.phoneno = phoneno;
        return this;
    }
    @JsonProperty("policyno")
    public String policyno;
    public HlipcRequestBodyCertificateParameters withPolicyno(String policyno) {
        this.policyno = policyno;
        return this;
    }
}