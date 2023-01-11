package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CfmstRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public CfmstRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public CfmstRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public CfmstRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public CfmstRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}