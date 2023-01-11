package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DgcerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public DgcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("EnrollmentNo")
    public String enrollmentNo;
    public DgcerRequestBodyCertificateParameters withEnrollmentNo(String enrollmentNo) {
        this.enrollmentNo = enrollmentNo;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public DgcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RollNo")
    public String rollNo;
    public DgcerRequestBodyCertificateParameters withRollNo(String rollNo) {
        this.rollNo = rollNo;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public DgcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
}