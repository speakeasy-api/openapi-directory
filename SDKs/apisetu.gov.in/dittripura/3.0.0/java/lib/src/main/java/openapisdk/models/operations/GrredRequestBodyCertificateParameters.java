package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GrredRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public GrredRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public GrredRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}