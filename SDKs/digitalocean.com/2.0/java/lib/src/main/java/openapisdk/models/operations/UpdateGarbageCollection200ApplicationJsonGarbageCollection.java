package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdateGarbageCollection200ApplicationJsonGarbageCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobs_deleted")
    public Long blobsDeleted;
    public UpdateGarbageCollection200ApplicationJsonGarbageCollection withBlobsDeleted(Long blobsDeleted) {
        this.blobsDeleted = blobsDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public UpdateGarbageCollection200ApplicationJsonGarbageCollection withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freed_bytes")
    public Long freedBytes;
    public UpdateGarbageCollection200ApplicationJsonGarbageCollection withFreedBytes(Long freedBytes) {
        this.freedBytes = freedBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registry_name")
    public String registryName;
    public UpdateGarbageCollection200ApplicationJsonGarbageCollection withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum status;
    public UpdateGarbageCollection200ApplicationJsonGarbageCollection withStatus(UpdateGarbageCollection200ApplicationJsonGarbageCollectionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public UpdateGarbageCollection200ApplicationJsonGarbageCollection withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public UpdateGarbageCollection200ApplicationJsonGarbageCollection withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}