package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateIdentityProviderRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeMapping")
    public java.util.Map<String, String> attributeMapping;
    public CreateIdentityProviderRequest withAttributeMapping(java.util.Map<String, String> attributeMapping) {
        this.attributeMapping = attributeMapping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdpIdentifiers")
    public String[] idpIdentifiers;
    public CreateIdentityProviderRequest withIdpIdentifiers(String[] idpIdentifiers) {
        this.idpIdentifiers = idpIdentifiers;
        return this;
    }
    @JsonProperty("ProviderDetails")
    public java.util.Map<String, String> providerDetails;
    public CreateIdentityProviderRequest withProviderDetails(java.util.Map<String, String> providerDetails) {
        this.providerDetails = providerDetails;
        return this;
    }
    @JsonProperty("ProviderName")
    public String providerName;
    public CreateIdentityProviderRequest withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
    @JsonProperty("ProviderType")
    public IdentityProviderTypeTypeEnum providerType;
    public CreateIdentityProviderRequest withProviderType(IdentityProviderTypeTypeEnum providerType) {
        this.providerType = providerType;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public CreateIdentityProviderRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}