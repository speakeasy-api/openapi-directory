package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MbcerRequestBodyCertificateParameters {
    @JsonProperty("CertType")
    public String certType;
    public MbcerRequestBodyCertificateParameters withCertType(String certType) {
        this.certType = certType;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public MbcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("Membership_No")
    public String membershipNo;
    public MbcerRequestBodyCertificateParameters withMembershipNo(String membershipNo) {
        this.membershipNo = membershipNo;
        return this;
    }
}