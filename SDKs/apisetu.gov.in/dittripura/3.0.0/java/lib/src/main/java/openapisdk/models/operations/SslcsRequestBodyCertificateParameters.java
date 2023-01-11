package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SslcsRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public SslcsRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public SslcsRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}