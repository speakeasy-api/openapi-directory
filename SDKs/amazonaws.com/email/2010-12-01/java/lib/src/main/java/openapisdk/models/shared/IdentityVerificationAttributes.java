package openapisdk.models.shared;



public class IdentityVerificationAttributes {
    public VerificationStatusEnum verificationStatus;
    public IdentityVerificationAttributes withVerificationStatus(VerificationStatusEnum verificationStatus) {
        this.verificationStatus = verificationStatus;
        return this;
    }
    public String verificationToken;
    public IdentityVerificationAttributes withVerificationToken(String verificationToken) {
        this.verificationToken = verificationToken;
        return this;
    }
}