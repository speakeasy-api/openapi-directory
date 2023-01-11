package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BknocRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public BknocRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public BknocRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RegNum")
    public String regNum;
    public BknocRequestBodyCertificateParameters withRegNum(String regNum) {
        this.regNum = regNum;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public BknocRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}