package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HsmgrRequestBodyCertificateParameters {
    @JsonProperty("CUID")
    public String cuid;
    public HsmgrRequestBodyCertificateParameters withCuid(String cuid) {
        this.cuid = cuid;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public HsmgrRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public HsmgrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("IDXN")
    public String idxn;
    public HsmgrRequestBodyCertificateParameters withIdxn(String idxn) {
        this.idxn = idxn;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public HsmgrRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("YOE")
    public String yoe;
    public HsmgrRequestBodyCertificateParameters withYoe(String yoe) {
        this.yoe = yoe;
        return this;
    }
}