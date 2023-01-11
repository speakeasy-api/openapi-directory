package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("completed_at")
    public OffsetDateTime completedAt;
    public Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction withCompletedAt(OffsetDateTime completedAt) {
        this.completedAt = completedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion region;
    public Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction withRegion(Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionRegion region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region_slug")
    public java.util.Map<String, Object> regionSlug;
    public Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction withRegionSlug(java.util.Map<String, Object> regionSlug) {
        this.regionSlug = regionSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_id")
    public Long resourceId;
    public Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction withResourceId(Long resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("started_at")
    public OffsetDateTime startedAt;
    public Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum status;
    public Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction withStatus(Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesActionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction withType(String type) {
        this.type = type;
        return this;
    }
}