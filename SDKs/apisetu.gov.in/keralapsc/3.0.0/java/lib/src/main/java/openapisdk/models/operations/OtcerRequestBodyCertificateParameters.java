package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OtcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public OtcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public OtcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public OtcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}