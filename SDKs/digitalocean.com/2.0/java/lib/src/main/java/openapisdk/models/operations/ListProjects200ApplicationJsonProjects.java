package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListProjects200ApplicationJsonProjects {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ListProjects200ApplicationJsonProjects withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ListProjects200ApplicationJsonProjects withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public ListProjects200ApplicationJsonProjectsEnvironmentEnum environment;
    public ListProjects200ApplicationJsonProjects withEnvironment(ListProjects200ApplicationJsonProjectsEnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListProjects200ApplicationJsonProjects withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_default")
    public Boolean isDefault;
    public ListProjects200ApplicationJsonProjects withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListProjects200ApplicationJsonProjects withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner_id")
    public Long ownerId;
    public ListProjects200ApplicationJsonProjects withOwnerId(Long ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner_uuid")
    public String ownerUuid;
    public ListProjects200ApplicationJsonProjects withOwnerUuid(String ownerUuid) {
        this.ownerUuid = ownerUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purpose")
    public String purpose;
    public ListProjects200ApplicationJsonProjects withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ListProjects200ApplicationJsonProjects withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}