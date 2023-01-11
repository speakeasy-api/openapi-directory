package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LpgsvRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public LpgsvRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public LpgsvRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("GENDER")
    public String gender;
    public LpgsvRequestBodyCertificateParameters withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonProperty("LPGId")
    public String lpgId;
    public LpgsvRequestBodyCertificateParameters withLpgId(String lpgId) {
        this.lpgId = lpgId;
        return this;
    }
    @JsonProperty("SVNo")
    public String svNo;
    public LpgsvRequestBodyCertificateParameters withSvNo(String svNo) {
        this.svNo = svNo;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public LpgsvRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}