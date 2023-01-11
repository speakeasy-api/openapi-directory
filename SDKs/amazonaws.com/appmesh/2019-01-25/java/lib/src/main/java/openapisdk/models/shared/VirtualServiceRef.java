package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * VirtualServiceRef
 * An object that represents a virtual service returned by a list operation.
**/
public class VirtualServiceRef {
    @JsonProperty("arn")
    public String arn;
    public VirtualServiceRef withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public VirtualServiceRef withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public VirtualServiceRef withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonProperty("meshName")
    public String meshName;
    public VirtualServiceRef withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @JsonProperty("meshOwner")
    public String meshOwner;
    public VirtualServiceRef withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
    @JsonProperty("resourceOwner")
    public String resourceOwner;
    public VirtualServiceRef withResourceOwner(String resourceOwner) {
        this.resourceOwner = resourceOwner;
        return this;
    }
    @JsonProperty("version")
    public Long version;
    public VirtualServiceRef withVersion(Long version) {
        this.version = version;
        return this;
    }
    @JsonProperty("virtualServiceName")
    public String virtualServiceName;
    public VirtualServiceRef withVirtualServiceName(String virtualServiceName) {
        this.virtualServiceName = virtualServiceName;
        return this;
    }
}