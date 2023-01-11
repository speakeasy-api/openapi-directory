package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SscerRequestBodyCertificateParameters {
    @JsonProperty("CUID")
    public String cuid;
    public SscerRequestBodyCertificateParameters withCuid(String cuid) {
        this.cuid = cuid;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public SscerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public SscerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("IDXN")
    public String idxn;
    public SscerRequestBodyCertificateParameters withIdxn(String idxn) {
        this.idxn = idxn;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public SscerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("YOE")
    public String yoe;
    public SscerRequestBodyCertificateParameters withYoe(String yoe) {
        this.yoe = yoe;
        return this;
    }
}