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
 * LicenseConfigurationAssociation
 * Describes an association with a license configuration.
**/
public class LicenseConfigurationAssociation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AmiAssociationScope")
    public String amiAssociationScope;
    public LicenseConfigurationAssociation withAmiAssociationScope(String amiAssociationScope) {
        this.amiAssociationScope = amiAssociationScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("AssociationTime")
    public OffsetDateTime associationTime;
    public LicenseConfigurationAssociation withAssociationTime(OffsetDateTime associationTime) {
        this.associationTime = associationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public LicenseConfigurationAssociation withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceOwnerId")
    public String resourceOwnerId;
    public LicenseConfigurationAssociation withResourceOwnerId(String resourceOwnerId) {
        this.resourceOwnerId = resourceOwnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public ResourceTypeEnum resourceType;
    public LicenseConfigurationAssociation withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}