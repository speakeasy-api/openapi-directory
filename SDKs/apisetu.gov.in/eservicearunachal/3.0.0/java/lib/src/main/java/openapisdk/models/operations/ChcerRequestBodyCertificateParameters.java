package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public ChcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public ChcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public ChcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
}