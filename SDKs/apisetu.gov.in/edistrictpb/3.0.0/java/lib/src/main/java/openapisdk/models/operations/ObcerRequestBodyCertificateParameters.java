package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public ObcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("DSNNo")
    public String dsnNo;
    public ObcerRequestBodyCertificateParameters withDsnNo(String dsnNo) {
        this.dsnNo = dsnNo;
        return this;
    }
    @JsonProperty("Father")
    public String father;
    public ObcerRequestBodyCertificateParameters withFather(String father) {
        this.father = father;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public ObcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public ObcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}