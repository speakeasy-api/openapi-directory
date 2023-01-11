package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UnmappedAttribute
 *  An attribute that we extracted, but were unable to relate to an entity. 
**/
public class UnmappedAttribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attribute")
    public Attribute attribute;
    public UnmappedAttribute withAttribute(Attribute attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public EntityTypeEnum type;
    public UnmappedAttribute withType(EntityTypeEnum type) {
        this.type = type;
        return this;
    }
}