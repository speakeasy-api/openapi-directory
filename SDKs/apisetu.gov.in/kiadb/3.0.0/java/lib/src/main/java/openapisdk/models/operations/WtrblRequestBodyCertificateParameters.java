package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WtrblRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public WtrblRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public WtrblRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RegNum")
    public String regNum;
    public WtrblRequestBodyCertificateParameters withRegNum(String regNum) {
        this.regNum = regNum;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public WtrblRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}