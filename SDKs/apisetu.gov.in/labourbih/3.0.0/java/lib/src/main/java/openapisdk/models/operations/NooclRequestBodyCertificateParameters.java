package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NooclRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public NooclRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public NooclRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}