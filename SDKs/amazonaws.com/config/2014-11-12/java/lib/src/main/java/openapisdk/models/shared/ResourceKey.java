package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResourceKey
 * The details that identify a resource within Config, including the resource type and resource ID.
**/
public class ResourceKey {
    @JsonProperty("resourceId")
    public String resourceId;
    public ResourceKey withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;
    public ResourceKey withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}