package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HscerRequestBodyCertificateParameters {
    @JsonProperty("CUID")
    public String cuid;
    public HscerRequestBodyCertificateParameters withCuid(String cuid) {
        this.cuid = cuid;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public HscerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public HscerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("IDXN")
    public String idxn;
    public HscerRequestBodyCertificateParameters withIdxn(String idxn) {
        this.idxn = idxn;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public HscerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("YOE")
    public String yoe;
    public HscerRequestBodyCertificateParameters withYoe(String yoe) {
        this.yoe = yoe;
        return this;
    }
}