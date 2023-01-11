package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RdcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public RdcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public RdcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("final_doc_reg_no")
    public String finalDocRegNo;
    public RdcerRequestBodyCertificateParameters withFinalDocRegNo(String finalDocRegNo) {
        this.finalDocRegNo = finalDocRegNo;
        return this;
    }
}