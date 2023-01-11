package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SmcerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public SmcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public SmcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}