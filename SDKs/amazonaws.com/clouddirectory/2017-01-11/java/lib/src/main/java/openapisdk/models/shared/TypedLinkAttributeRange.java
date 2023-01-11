package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TypedLinkAttributeRange
 * Identifies the range of attributes that are used by a specified filter.
**/
public class TypedLinkAttributeRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeName")
    public String attributeName;
    public TypedLinkAttributeRange withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonProperty("Range")
    public TypedAttributeValueRange range;
    public TypedLinkAttributeRange withRange(TypedAttributeValueRange range) {
        this.range = range;
        return this;
    }
}