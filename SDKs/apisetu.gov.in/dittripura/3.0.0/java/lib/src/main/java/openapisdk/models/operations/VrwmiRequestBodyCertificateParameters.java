package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VrwmiRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public VrwmiRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public VrwmiRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}