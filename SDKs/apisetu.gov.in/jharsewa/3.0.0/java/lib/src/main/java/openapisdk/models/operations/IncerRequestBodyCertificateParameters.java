package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IncerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public IncerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public IncerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}