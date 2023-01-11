package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SslcrRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public SslcrRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public SslcrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public SslcrRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("regno")
    public String regno;
    public SslcrRequestBodyCertificateParameters withRegno(String regno) {
        this.regno = regno;
        return this;
    }
    @JsonProperty("year")
    public String year;
    public SslcrRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}