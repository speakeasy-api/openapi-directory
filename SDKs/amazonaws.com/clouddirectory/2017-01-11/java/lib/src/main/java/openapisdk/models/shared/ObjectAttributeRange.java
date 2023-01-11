package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObjectAttributeRange
 * A range of attributes.
**/
public class ObjectAttributeRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeKey")
    public AttributeKey attributeKey;
    public ObjectAttributeRange withAttributeKey(AttributeKey attributeKey) {
        this.attributeKey = attributeKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Range")
    public TypedAttributeValueRange range;
    public ObjectAttributeRange withRange(TypedAttributeValueRange range) {
        this.range = range;
        return this;
    }
}