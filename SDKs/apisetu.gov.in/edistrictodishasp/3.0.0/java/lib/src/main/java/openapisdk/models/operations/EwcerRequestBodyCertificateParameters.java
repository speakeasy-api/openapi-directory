package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EwcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public EwcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public EwcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public EwcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public EwcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}