package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PsnocRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public PsnocRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public PsnocRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RegNum")
    public String regNum;
    public PsnocRequestBodyCertificateParameters withRegNum(String regNum) {
        this.regNum = regNum;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public PsnocRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}