package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PodocRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public PodocRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public PodocRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("PolDOB")
    public String polDOB;
    public PodocRequestBodyCertificateParameters withPolDob(String polDOB) {
        this.polDOB = polDOB;
        return this;
    }
    @JsonProperty("PolicyNo")
    public String policyNo;
    public PodocRequestBodyCertificateParameters withPolicyNo(String policyNo) {
        this.policyNo = policyNo;
        return this;
    }
}