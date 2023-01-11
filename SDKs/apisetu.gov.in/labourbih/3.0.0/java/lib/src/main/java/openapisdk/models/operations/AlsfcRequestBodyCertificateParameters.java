package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AlsfcRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public AlsfcRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public AlsfcRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}