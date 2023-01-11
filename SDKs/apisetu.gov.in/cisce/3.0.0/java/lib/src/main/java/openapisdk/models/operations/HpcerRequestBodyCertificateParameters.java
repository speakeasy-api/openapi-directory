package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HpcerRequestBodyCertificateParameters {
    @JsonProperty("CUID")
    public String cuid;
    public HpcerRequestBodyCertificateParameters withCuid(String cuid) {
        this.cuid = cuid;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public HpcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public HpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("IDXN")
    public String idxn;
    public HpcerRequestBodyCertificateParameters withIdxn(String idxn) {
        this.idxn = idxn;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public HpcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("YOE")
    public String yoe;
    public HpcerRequestBodyCertificateParameters withYoe(String yoe) {
        this.yoe = yoe;
        return this;
    }
}