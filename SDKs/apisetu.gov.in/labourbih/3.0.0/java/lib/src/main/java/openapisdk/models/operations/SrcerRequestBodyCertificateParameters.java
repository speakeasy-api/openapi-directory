package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SrcerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public SrcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public SrcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}