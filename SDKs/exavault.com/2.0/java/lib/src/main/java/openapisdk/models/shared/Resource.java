package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resource
 * All properties of the resource.
**/
public class Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public ResourceAttributes attributes;
    public Resource withAttributes(ResourceAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Resource withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public ResourceRelationships relationships;
    public Resource withRelationships(ResourceRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ResourceTypeEnum type;
    public Resource withType(ResourceTypeEnum type) {
        this.type = type;
        return this;
    }
}