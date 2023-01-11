package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes
 * An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM).
**/
public class PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainSigningPrivateKey")
    public String domainSigningPrivateKey;
    public PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes withDomainSigningPrivateKey(String domainSigningPrivateKey) {
        this.domainSigningPrivateKey = domainSigningPrivateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainSigningSelector")
    public String domainSigningSelector;
    public PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes withDomainSigningSelector(String domainSigningSelector) {
        this.domainSigningSelector = domainSigningSelector;
        return this;
    }
}