package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RdcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public RdcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public RdcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("REGDNO")
    public String regdno;
    public RdcerRequestBodyCertificateParameters withRegdno(String regdno) {
        this.regdno = regdno;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public RdcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}