package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TwipcRequestBodyCertificateParameters {
    @JsonProperty("phoneno")
    public String phoneno;
    public TwipcRequestBodyCertificateParameters withPhoneno(String phoneno) {
        this.phoneno = phoneno;
        return this;
    }
    @JsonProperty("policyno")
    public String policyno;
    public TwipcRequestBodyCertificateParameters withPolicyno(String policyno) {
        this.policyno = policyno;
        return this;
    }
}