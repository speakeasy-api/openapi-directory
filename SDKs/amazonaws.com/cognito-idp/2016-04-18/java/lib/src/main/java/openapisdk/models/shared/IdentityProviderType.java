package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * IdentityProviderType
 * A container for information about an identity provider.
**/
public class IdentityProviderType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeMapping")
    public java.util.Map<String, String> attributeMapping;
    public IdentityProviderType withAttributeMapping(java.util.Map<String, String> attributeMapping) {
        this.attributeMapping = attributeMapping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationDate")
    public OffsetDateTime creationDate;
    public IdentityProviderType withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdpIdentifiers")
    public String[] idpIdentifiers;
    public IdentityProviderType withIdpIdentifiers(String[] idpIdentifiers) {
        this.idpIdentifiers = idpIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public IdentityProviderType withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderDetails")
    public java.util.Map<String, String> providerDetails;
    public IdentityProviderType withProviderDetails(java.util.Map<String, String> providerDetails) {
        this.providerDetails = providerDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderName")
    public String providerName;
    public IdentityProviderType withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderType")
    public IdentityProviderTypeTypeEnum providerType;
    public IdentityProviderType withProviderType(IdentityProviderTypeTypeEnum providerType) {
        this.providerType = providerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public IdentityProviderType withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}