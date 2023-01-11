package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntitySummary
 * This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities.
**/
public class EntitySummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntityArn")
    public String entityArn;
    public EntitySummary withEntityArn(String entityArn) {
        this.entityArn = entityArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntityId")
    public String entityId;
    public EntitySummary withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntityType")
    public String entityType;
    public EntitySummary withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModifiedDate")
    public String lastModifiedDate;
    public EntitySummary withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public EntitySummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Visibility")
    public String visibility;
    public EntitySummary withVisibility(String visibility) {
        this.visibility = visibility;
        return this;
    }
}