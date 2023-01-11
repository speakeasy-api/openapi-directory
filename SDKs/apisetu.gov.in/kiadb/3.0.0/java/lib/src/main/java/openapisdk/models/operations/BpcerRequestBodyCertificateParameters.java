package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BpcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public BpcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public BpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RegNum")
    public String regNum;
    public BpcerRequestBodyCertificateParameters withRegNum(String regNum) {
        this.regNum = regNum;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public BpcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}