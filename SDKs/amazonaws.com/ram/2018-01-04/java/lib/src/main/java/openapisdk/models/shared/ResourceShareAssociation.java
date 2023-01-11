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
 * ResourceShareAssociation
 * Describes an association with a resource share.
**/
public class ResourceShareAssociation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedEntity")
    public String associatedEntity;
    public ResourceShareAssociation withAssociatedEntity(String associatedEntity) {
        this.associatedEntity = associatedEntity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associationType")
    public ResourceShareAssociationTypeEnum associationType;
    public ResourceShareAssociation withAssociationType(ResourceShareAssociationTypeEnum associationType) {
        this.associationType = associationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public ResourceShareAssociation withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external")
    public Boolean external;
    public ResourceShareAssociation withExternal(Boolean external) {
        this.external = external;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedTime")
    public OffsetDateTime lastUpdatedTime;
    public ResourceShareAssociation withLastUpdatedTime(OffsetDateTime lastUpdatedTime) {
        this.lastUpdatedTime = lastUpdatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareArn")
    public String resourceShareArn;
    public ResourceShareAssociation withResourceShareArn(String resourceShareArn) {
        this.resourceShareArn = resourceShareArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareName")
    public String resourceShareName;
    public ResourceShareAssociation withResourceShareName(String resourceShareName) {
        this.resourceShareName = resourceShareName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ResourceShareAssociationStatusEnum status;
    public ResourceShareAssociation withStatus(ResourceShareAssociationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public ResourceShareAssociation withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}