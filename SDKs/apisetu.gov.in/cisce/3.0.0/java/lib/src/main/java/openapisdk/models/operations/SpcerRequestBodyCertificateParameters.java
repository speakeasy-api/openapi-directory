package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SpcerRequestBodyCertificateParameters {
    @JsonProperty("CUID")
    public String cuid;
    public SpcerRequestBodyCertificateParameters withCuid(String cuid) {
        this.cuid = cuid;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public SpcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public SpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("IDXN")
    public String idxn;
    public SpcerRequestBodyCertificateParameters withIdxn(String idxn) {
        this.idxn = idxn;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public SpcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("YOE")
    public String yoe;
    public SpcerRequestBodyCertificateParameters withYoe(String yoe) {
        this.yoe = yoe;
        return this;
    }
}