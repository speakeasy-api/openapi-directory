package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CemstRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public CemstRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public CemstRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("rollno")
    public String rollno;
    public CemstRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public CemstRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}