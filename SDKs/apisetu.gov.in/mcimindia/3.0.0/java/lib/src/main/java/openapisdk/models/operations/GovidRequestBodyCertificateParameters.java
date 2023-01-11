package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GovidRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public GovidRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public GovidRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("REGN_NO")
    public String regnNO;
    public GovidRequestBodyCertificateParameters withRegnNo(String regnNO) {
        this.regnNO = regnNO;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public GovidRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}