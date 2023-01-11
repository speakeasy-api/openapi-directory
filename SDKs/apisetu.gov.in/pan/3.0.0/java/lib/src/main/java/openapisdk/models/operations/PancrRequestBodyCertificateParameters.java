package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PancrRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public PancrRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public PancrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("GENDER")
    public String gender;
    public PancrRequestBodyCertificateParameters withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonProperty("PANFullName")
    public String panFullName;
    public PancrRequestBodyCertificateParameters withPanFullName(String panFullName) {
        this.panFullName = panFullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public PancrRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("panno")
    public String panno;
    public PancrRequestBodyCertificateParameters withPanno(String panno) {
        this.panno = panno;
        return this;
    }
}