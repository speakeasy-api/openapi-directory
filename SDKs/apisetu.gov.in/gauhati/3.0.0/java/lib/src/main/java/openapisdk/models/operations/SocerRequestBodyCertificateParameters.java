package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SocerRequestBodyCertificateParameters {
    @JsonProperty("APPL_NO")
    public String applNO;
    public SocerRequestBodyCertificateParameters withApplNo(String applNO) {
        this.applNO = applNO;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public SocerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public SocerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("SESSION")
    public String session;
    public SocerRequestBodyCertificateParameters withSession(String session) {
        this.session = session;
        return this;
    }
}