package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RscerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public RscerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("DSNNo")
    public String dsnNo;
    public RscerRequestBodyCertificateParameters withDsnNo(String dsnNo) {
        this.dsnNo = dsnNo;
        return this;
    }
    @JsonProperty("FatherName")
    public String fatherName;
    public RscerRequestBodyCertificateParameters withFatherName(String fatherName) {
        this.fatherName = fatherName;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public RscerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public RscerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}