package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceInventory
 * Details about a resource.
**/
public class ResourceInventory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Platform")
    public String platform;
    public ResourceInventory withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlatformVersion")
    public String platformVersion;
    public ResourceInventory withPlatformVersion(String platformVersion) {
        this.platformVersion = platformVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public ResourceInventory withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public String resourceId;
    public ResourceInventory withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceOwningAccountId")
    public String resourceOwningAccountId;
    public ResourceInventory withResourceOwningAccountId(String resourceOwningAccountId) {
        this.resourceOwningAccountId = resourceOwningAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public ResourceTypeEnum resourceType;
    public ResourceInventory withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}