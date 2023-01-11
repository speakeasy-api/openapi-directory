package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LcsagRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public LcsagRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public LcsagRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RegNum")
    public String regNum;
    public LcsagRequestBodyCertificateParameters withRegNum(String regNum) {
        this.regNum = regNum;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public LcsagRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}