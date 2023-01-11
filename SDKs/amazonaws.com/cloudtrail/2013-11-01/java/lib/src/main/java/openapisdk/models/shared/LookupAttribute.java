package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LookupAttribute
 * Specifies an attribute and value that filter the events returned.
**/
public class LookupAttribute {
    @JsonProperty("AttributeKey")
    public LookupAttributeKeyEnum attributeKey;
    public LookupAttribute withAttributeKey(LookupAttributeKeyEnum attributeKey) {
        this.attributeKey = attributeKey;
        return this;
    }
    @JsonProperty("AttributeValue")
    public String attributeValue;
    public LookupAttribute withAttributeValue(String attributeValue) {
        this.attributeValue = attributeValue;
        return this;
    }
}