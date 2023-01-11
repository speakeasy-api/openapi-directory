package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TrcerRequestBodyCertificateParameters {
    @JsonProperty("CERT_NO")
    public String certNO;
    public TrcerRequestBodyCertificateParameters withCertNo(String certNO) {
        this.certNO = certNO;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public TrcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public TrcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("Session")
    public String session;
    public TrcerRequestBodyCertificateParameters withSession(String session) {
        this.session = session;
        return this;
    }
}