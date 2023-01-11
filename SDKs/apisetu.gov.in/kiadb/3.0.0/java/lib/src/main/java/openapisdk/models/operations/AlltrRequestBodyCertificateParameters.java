package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AlltrRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public AlltrRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public AlltrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RegNum")
    public String regNum;
    public AlltrRequestBodyCertificateParameters withRegNum(String regNum) {
        this.regNum = regNum;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public AlltrRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}