package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ShcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public ShcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public ShcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public ShcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public ShcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}