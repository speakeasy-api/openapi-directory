package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ClcerRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public ClcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public ClcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}