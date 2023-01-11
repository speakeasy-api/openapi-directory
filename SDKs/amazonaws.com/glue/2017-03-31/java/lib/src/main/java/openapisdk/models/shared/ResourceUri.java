package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceUri
 * The URIs for function resources.
**/
public class ResourceUri {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public ResourceTypeEnum resourceType;
    public ResourceUri withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Uri")
    public String uri;
    public ResourceUri withUri(String uri) {
        this.uri = uri;
        return this;
    }
}