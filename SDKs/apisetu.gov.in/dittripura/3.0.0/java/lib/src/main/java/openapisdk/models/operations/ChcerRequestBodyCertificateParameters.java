package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChcerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public ChcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public ChcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}