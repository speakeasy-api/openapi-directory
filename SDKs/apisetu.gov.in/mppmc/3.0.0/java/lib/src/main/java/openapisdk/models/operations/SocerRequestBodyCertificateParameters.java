package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SocerRequestBodyCertificateParameters {
    @JsonProperty("APPNO")
    public String appno;
    public SocerRequestBodyCertificateParameters withAppno(String appno) {
        this.appno = appno;
        return this;
    }
    @JsonProperty("Date_Of_Birth")
    public String dateOfBirth;
    public SocerRequestBodyCertificateParameters withDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonProperty("ENROLNO")
    public String enrolno;
    public SocerRequestBodyCertificateParameters withEnrolno(String enrolno) {
        this.enrolno = enrolno;
        return this;
    }
    @JsonProperty("TypOfCert")
    public String typOfCert;
    public SocerRequestBodyCertificateParameters withTypOfCert(String typOfCert) {
        this.typOfCert = typOfCert;
        return this;
    }
}