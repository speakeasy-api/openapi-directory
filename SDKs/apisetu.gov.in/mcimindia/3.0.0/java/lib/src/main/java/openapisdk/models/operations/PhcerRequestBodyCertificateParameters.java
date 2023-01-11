package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PhcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public PhcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public PhcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("REGN_NO")
    public String regnNO;
    public PhcerRequestBodyCertificateParameters withRegnNo(String regnNO) {
        this.regnNO = regnNO;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public PhcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}