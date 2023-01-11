package openapisdk.models.shared;



/**
 * GetIdentityDkimAttributesResponse
 * Represents the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this response also contains the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published.
**/
public class GetIdentityDkimAttributesResponse {
    public java.util.Map<String, IdentityDkimAttributes> dkimAttributes;
    public GetIdentityDkimAttributesResponse withDkimAttributes(java.util.Map<String, IdentityDkimAttributes> dkimAttributes) {
        this.dkimAttributes = dkimAttributes;
        return this;
    }
}