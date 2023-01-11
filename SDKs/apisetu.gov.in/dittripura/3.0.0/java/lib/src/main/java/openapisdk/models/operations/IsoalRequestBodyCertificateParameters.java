package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IsoalRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public IsoalRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public IsoalRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}