package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CripcRequestBodyCertificateParameters {
    @JsonProperty("phoneno")
    public String phoneno;
    public CripcRequestBodyCertificateParameters withPhoneno(String phoneno) {
        this.phoneno = phoneno;
        return this;
    }
    @JsonProperty("policyno")
    public String policyno;
    public CripcRequestBodyCertificateParameters withPolicyno(String policyno) {
        this.policyno = policyno;
        return this;
    }
}