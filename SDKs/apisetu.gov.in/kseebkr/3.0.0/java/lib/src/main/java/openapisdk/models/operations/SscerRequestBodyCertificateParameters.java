package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SscerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public SscerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public SscerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("REGNO")
    public String regno;
    public SscerRequestBodyCertificateParameters withRegno(String regno) {
        this.regno = regno;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public SscerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}