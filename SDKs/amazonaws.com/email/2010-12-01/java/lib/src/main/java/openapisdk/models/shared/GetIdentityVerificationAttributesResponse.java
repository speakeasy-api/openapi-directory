package openapisdk.models.shared;



/**
 * GetIdentityVerificationAttributesResponse
 * The Amazon SES verification status of a list of identities. For domain identities, this response also contains the verification token.
**/
public class GetIdentityVerificationAttributesResponse {
    public java.util.Map<String, IdentityVerificationAttributes> verificationAttributes;
    public GetIdentityVerificationAttributesResponse withVerificationAttributes(java.util.Map<String, IdentityVerificationAttributes> verificationAttributes) {
        this.verificationAttributes = verificationAttributes;
        return this;
    }
}