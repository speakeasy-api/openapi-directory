package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AlsblRequestBodyCertificateParameters {
    @JsonProperty("RefNo")
    public String refNo;
    public AlsblRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public AlsblRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}