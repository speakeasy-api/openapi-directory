package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RmcerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public RmcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public RmcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}