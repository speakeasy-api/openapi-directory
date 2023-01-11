package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DtcerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public DtcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public DtcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}