package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EgcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public EgcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public EgcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public EgcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public EgcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}