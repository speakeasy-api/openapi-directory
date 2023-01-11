package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RitinRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public RitinRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public RitinRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}