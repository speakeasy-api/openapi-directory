package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GovidRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public GovidRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("Membership_No")
    public String membershipNo;
    public GovidRequestBodyCertificateParameters withMembershipNo(String membershipNo) {
        this.membershipNo = membershipNo;
        return this;
    }
}