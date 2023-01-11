package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MpkbyRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public MpkbyRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public MpkbyRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}