package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LvcerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public LvcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public LvcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}