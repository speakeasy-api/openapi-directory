package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FslcsRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public FslcsRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public FslcsRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}