package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EwcerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public EwcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public EwcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}