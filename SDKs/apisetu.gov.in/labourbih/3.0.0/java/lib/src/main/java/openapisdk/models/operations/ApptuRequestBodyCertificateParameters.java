package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApptuRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public ApptuRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public ApptuRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}