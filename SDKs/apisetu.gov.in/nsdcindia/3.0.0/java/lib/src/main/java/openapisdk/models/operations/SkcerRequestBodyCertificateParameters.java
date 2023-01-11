package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SkcerRequestBodyCertificateParameters {
    @JsonProperty("CentCID")
    public String centCID;
    public SkcerRequestBodyCertificateParameters withCentCid(String centCID) {
        this.centCID = centCID;
        return this;
    }
    @JsonProperty("CertID")
    public String certID;
    public SkcerRequestBodyCertificateParameters withCertId(String certID) {
        this.certID = certID;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public SkcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public SkcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
}