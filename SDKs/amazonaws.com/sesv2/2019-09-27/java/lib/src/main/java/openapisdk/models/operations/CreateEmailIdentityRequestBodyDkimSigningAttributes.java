package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateEmailIdentityRequestBodyDkimSigningAttributes
 * An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM).
**/
public class CreateEmailIdentityRequestBodyDkimSigningAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainSigningPrivateKey")
    public String domainSigningPrivateKey;
    public CreateEmailIdentityRequestBodyDkimSigningAttributes withDomainSigningPrivateKey(String domainSigningPrivateKey) {
        this.domainSigningPrivateKey = domainSigningPrivateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainSigningSelector")
    public String domainSigningSelector;
    public CreateEmailIdentityRequestBodyDkimSigningAttributes withDomainSigningSelector(String domainSigningSelector) {
        this.domainSigningSelector = domainSigningSelector;
        return this;
    }
}