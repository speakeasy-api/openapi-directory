package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DmcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public DmcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public DmcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public DmcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}