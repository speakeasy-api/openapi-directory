package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AlimwRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public AlimwRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public AlimwRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}