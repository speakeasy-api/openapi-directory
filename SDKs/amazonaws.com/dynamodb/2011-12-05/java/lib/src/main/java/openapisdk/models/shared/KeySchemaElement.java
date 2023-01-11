package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KeySchemaElement
 * <code>KeySchemaElement</code> is the primary key (hash or hash-and-range) structure for the table.
**/
public class KeySchemaElement {
    @JsonProperty("AttributeName")
    public String attributeName;
    public KeySchemaElement withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonProperty("AttributeType")
    public ScalarAttributeTypeEnum attributeType;
    public KeySchemaElement withAttributeType(ScalarAttributeTypeEnum attributeType) {
        this.attributeType = attributeType;
        return this;
    }
}