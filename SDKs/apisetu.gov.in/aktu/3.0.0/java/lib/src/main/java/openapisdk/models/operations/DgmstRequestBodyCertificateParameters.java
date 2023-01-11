package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DgmstRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public DgmstRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("EnrollmentNo")
    public String enrollmentNo;
    public DgmstRequestBodyCertificateParameters withEnrollmentNo(String enrollmentNo) {
        this.enrollmentNo = enrollmentNo;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public DgmstRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RollNo")
    public String rollNo;
    public DgmstRequestBodyCertificateParameters withRollNo(String rollNo) {
        this.rollNo = rollNo;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public DgmstRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("Year")
    public String year;
    public DgmstRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}