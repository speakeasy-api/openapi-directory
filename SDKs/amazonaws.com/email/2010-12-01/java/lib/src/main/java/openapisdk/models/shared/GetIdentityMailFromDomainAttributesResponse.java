package openapisdk.models.shared;



/**
 * GetIdentityMailFromDomainAttributesResponse
 * Represents the custom MAIL FROM attributes for a list of identities.
**/
public class GetIdentityMailFromDomainAttributesResponse {
    public java.util.Map<String, IdentityMailFromDomainAttributes> mailFromDomainAttributes;
    public GetIdentityMailFromDomainAttributesResponse withMailFromDomainAttributes(java.util.Map<String, IdentityMailFromDomainAttributes> mailFromDomainAttributes) {
        this.mailFromDomainAttributes = mailFromDomainAttributes;
        return this;
    }
}