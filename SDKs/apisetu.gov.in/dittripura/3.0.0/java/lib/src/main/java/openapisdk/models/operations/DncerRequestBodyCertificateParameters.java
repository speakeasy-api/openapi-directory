package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DncerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public DncerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public DncerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}