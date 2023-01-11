package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CtcerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public CtcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public CtcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}