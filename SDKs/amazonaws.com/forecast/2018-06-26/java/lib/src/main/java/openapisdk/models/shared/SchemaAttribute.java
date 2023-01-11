package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SchemaAttribute
 * An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The <a>Schema</a> object contains an array of <code>SchemaAttribute</code> objects.
**/
public class SchemaAttribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeName")
    public String attributeName;
    public SchemaAttribute withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeType")
    public AttributeTypeEnum attributeType;
    public SchemaAttribute withAttributeType(AttributeTypeEnum attributeType) {
        this.attributeType = attributeType;
        return this;
    }
}