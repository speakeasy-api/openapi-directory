package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CfltrRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public CfltrRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public CfltrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RegNum")
    public String regNum;
    public CfltrRequestBodyCertificateParameters withRegNum(String regNum) {
        this.regNum = regNum;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public CfltrRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}