package openapisdk.models.shared;



public class IdentityDkimAttributes {
    public Boolean dkimEnabled;
    public IdentityDkimAttributes withDkimEnabled(Boolean dkimEnabled) {
        this.dkimEnabled = dkimEnabled;
        return this;
    }
    public String[] dkimTokens;
    public IdentityDkimAttributes withDkimTokens(String[] dkimTokens) {
        this.dkimTokens = dkimTokens;
        return this;
    }
    public VerificationStatusEnum dkimVerificationStatus;
    public IdentityDkimAttributes withDkimVerificationStatus(VerificationStatusEnum dkimVerificationStatus) {
        this.dkimVerificationStatus = dkimVerificationStatus;
        return this;
    }
}