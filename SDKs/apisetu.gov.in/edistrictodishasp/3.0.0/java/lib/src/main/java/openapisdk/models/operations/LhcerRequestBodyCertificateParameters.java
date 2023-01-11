package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LhcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public LhcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public LhcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public LhcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public LhcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}