package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public ObcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RefNo")
    public String refNo;
    public ObcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    @JsonProperty("TokenNo")
    public String tokenNo;
    public ObcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public ObcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}