package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("completed_at")
    public OffsetDateTime completedAt;
    public Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems withCompletedAt(OffsetDateTime completedAt) {
        this.completedAt = completedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsRegion region;
    public Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems withRegion(Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsRegion region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region_slug")
    public java.util.Map<String, Object> regionSlug;
    public Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems withRegionSlug(java.util.Map<String, Object> regionSlug) {
        this.regionSlug = regionSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_id")
    public Long resourceId;
    public Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems withResourceId(Long resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("started_at")
    public OffsetDateTime startedAt;
    public Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsStatusEnum status;
    public Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems withStatus(Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems withType(String type) {
        this.type = type;
        return this;
    }
}