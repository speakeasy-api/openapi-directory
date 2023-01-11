package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * VirtualRouterRef
 * An object that represents a virtual router returned by a list operation.
**/
public class VirtualRouterRef {
    @JsonProperty("arn")
    public String arn;
    public VirtualRouterRef withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public VirtualRouterRef withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public VirtualRouterRef withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonProperty("meshName")
    public String meshName;
    public VirtualRouterRef withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @JsonProperty("meshOwner")
    public String meshOwner;
    public VirtualRouterRef withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
    @JsonProperty("resourceOwner")
    public String resourceOwner;
    public VirtualRouterRef withResourceOwner(String resourceOwner) {
        this.resourceOwner = resourceOwner;
        return this;
    }
    @JsonProperty("version")
    public Long version;
    public VirtualRouterRef withVersion(Long version) {
        this.version = version;
        return this;
    }
    @JsonProperty("virtualRouterName")
    public String virtualRouterName;
    public VirtualRouterRef withVirtualRouterName(String virtualRouterName) {
        this.virtualRouterName = virtualRouterName;
        return this;
    }
}