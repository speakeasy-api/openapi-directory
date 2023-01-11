package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResourceRequirement
 * The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.
**/
public class ResourceRequirement {
    @JsonProperty("type")
    public ResourceTypeEnum type;
    public ResourceRequirement withType(ResourceTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public ResourceRequirement withValue(String value) {
        this.value = value;
        return this;
    }
}