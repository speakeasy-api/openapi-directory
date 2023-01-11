package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * MeshRef
 * An object that represents a service mesh returned by a list operation.
**/
public class MeshRef {
    @JsonProperty("arn")
    public String arn;
    public MeshRef withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public MeshRef withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public MeshRef withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonProperty("meshName")
    public String meshName;
    public MeshRef withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @JsonProperty("meshOwner")
    public String meshOwner;
    public MeshRef withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
    @JsonProperty("resourceOwner")
    public String resourceOwner;
    public MeshRef withResourceOwner(String resourceOwner) {
        this.resourceOwner = resourceOwner;
        return this;
    }
    @JsonProperty("version")
    public Long version;
    public MeshRef withVersion(Long version) {
        this.version = version;
        return this;
    }
}