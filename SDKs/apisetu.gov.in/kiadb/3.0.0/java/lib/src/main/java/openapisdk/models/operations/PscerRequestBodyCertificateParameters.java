package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PscerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public PscerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public PscerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RegNum")
    public String regNum;
    public PscerRequestBodyCertificateParameters withRegNum(String regNum) {
        this.regNum = regNum;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public PscerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}