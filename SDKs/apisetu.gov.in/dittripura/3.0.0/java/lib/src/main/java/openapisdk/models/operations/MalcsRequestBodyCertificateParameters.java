package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MalcsRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public MalcsRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public MalcsRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}