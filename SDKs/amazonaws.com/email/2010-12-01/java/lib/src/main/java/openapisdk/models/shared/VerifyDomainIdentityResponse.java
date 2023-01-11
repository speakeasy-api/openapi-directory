package openapisdk.models.shared;



/**
 * VerifyDomainIdentityResponse
 * Returns a TXT record that you must publish to the DNS server of your domain to complete domain verification with Amazon SES.
**/
public class VerifyDomainIdentityResponse {
    public String verificationToken;
    public VerifyDomainIdentityResponse withVerificationToken(String verificationToken) {
        this.verificationToken = verificationToken;
        return this;
    }
}