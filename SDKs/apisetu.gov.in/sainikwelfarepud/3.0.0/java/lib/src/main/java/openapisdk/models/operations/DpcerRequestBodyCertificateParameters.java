package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DpcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public DpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public DpcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("certNo")
    public String certNo;
    public DpcerRequestBodyCertificateParameters withCertNo(String certNo) {
        this.certNo = certNo;
        return this;
    }
}