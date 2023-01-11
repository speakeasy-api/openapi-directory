package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NbcerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public NbcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public NbcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}