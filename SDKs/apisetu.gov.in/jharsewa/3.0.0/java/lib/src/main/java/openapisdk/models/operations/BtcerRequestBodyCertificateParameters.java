package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BtcerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public BtcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public BtcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}