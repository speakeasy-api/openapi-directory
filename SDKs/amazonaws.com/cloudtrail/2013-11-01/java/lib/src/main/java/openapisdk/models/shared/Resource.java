package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resource
 * Specifies the type and name of a resource referenced by an event.
**/
public class Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceName")
    public String resourceName;
    public Resource withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public String resourceType;
    public Resource withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}