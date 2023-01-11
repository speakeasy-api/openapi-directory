package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceReceivingAccess
 * Describes an Amazon Lightsail instance that has access to a Lightsail bucket.
**/
public class ResourceReceivingAccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ResourceReceivingAccess withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public String resourceType;
    public ResourceReceivingAccess withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}