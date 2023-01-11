package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ShcerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public ShcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public ShcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}