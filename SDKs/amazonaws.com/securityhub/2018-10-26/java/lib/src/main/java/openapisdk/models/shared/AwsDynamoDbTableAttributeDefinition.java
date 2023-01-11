package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsDynamoDbTableAttributeDefinition
 * Contains a definition of an attribute for the table.
**/
public class AwsDynamoDbTableAttributeDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeName")
    public String attributeName;
    public AwsDynamoDbTableAttributeDefinition withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeType")
    public String attributeType;
    public AwsDynamoDbTableAttributeDefinition withAttributeType(String attributeType) {
        this.attributeType = attributeType;
        return this;
    }
}