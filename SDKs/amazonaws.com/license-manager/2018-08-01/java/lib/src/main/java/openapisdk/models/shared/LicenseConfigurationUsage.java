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
 * LicenseConfigurationUsage
 * Details about the usage of a resource associated with a license configuration.
**/
public class LicenseConfigurationUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("AssociationTime")
    public OffsetDateTime associationTime;
    public LicenseConfigurationUsage withAssociationTime(OffsetDateTime associationTime) {
        this.associationTime = associationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsumedLicenses")
    public Long consumedLicenses;
    public LicenseConfigurationUsage withConsumedLicenses(Long consumedLicenses) {
        this.consumedLicenses = consumedLicenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public LicenseConfigurationUsage withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceOwnerId")
    public String resourceOwnerId;
    public LicenseConfigurationUsage withResourceOwnerId(String resourceOwnerId) {
        this.resourceOwnerId = resourceOwnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceStatus")
    public String resourceStatus;
    public LicenseConfigurationUsage withResourceStatus(String resourceStatus) {
        this.resourceStatus = resourceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public ResourceTypeEnum resourceType;
    public LicenseConfigurationUsage withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}