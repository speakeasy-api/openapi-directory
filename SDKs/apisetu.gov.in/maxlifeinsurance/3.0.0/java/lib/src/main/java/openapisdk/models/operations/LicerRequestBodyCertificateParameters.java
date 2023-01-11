package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LicerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public LicerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public LicerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("POLID")
    public String polid;
    public LicerRequestBodyCertificateParameters withPolid(String polid) {
        this.polid = polid;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public LicerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}