package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HscerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public HscerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public HscerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("PASSYR")
    public String passyr;
    public HscerRequestBodyCertificateParameters withPassyr(String passyr) {
        this.passyr = passyr;
        return this;
    }
    @JsonProperty("REGNO")
    public String regno;
    public HscerRequestBodyCertificateParameters withRegno(String regno) {
        this.regno = regno;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public HscerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}