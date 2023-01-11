package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ShcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public ShcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("DSNNo")
    public String dsnNo;
    public ShcerRequestBodyCertificateParameters withDsnNo(String dsnNo) {
        this.dsnNo = dsnNo;
        return this;
    }
    @JsonProperty("Father")
    public String father;
    public ShcerRequestBodyCertificateParameters withFather(String father) {
        this.father = father;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public ShcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public ShcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}