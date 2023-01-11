package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProviderUserIdentifierType
 * A container for information about an identity provider for a user pool.
**/
public class ProviderUserIdentifierType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderAttributeName")
    public String providerAttributeName;
    public ProviderUserIdentifierType withProviderAttributeName(String providerAttributeName) {
        this.providerAttributeName = providerAttributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderAttributeValue")
    public String providerAttributeValue;
    public ProviderUserIdentifierType withProviderAttributeValue(String providerAttributeValue) {
        this.providerAttributeValue = providerAttributeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderName")
    public String providerName;
    public ProviderUserIdentifierType withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
}