package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RscerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public RscerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public RscerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}