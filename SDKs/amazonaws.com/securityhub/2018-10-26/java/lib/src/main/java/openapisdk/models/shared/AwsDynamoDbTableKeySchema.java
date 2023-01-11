package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsDynamoDbTableKeySchema
 * A component of the key schema for the DynamoDB table, a global secondary index, or a local secondary index.
**/
public class AwsDynamoDbTableKeySchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeName")
    public String attributeName;
    public AwsDynamoDbTableKeySchema withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyType")
    public String keyType;
    public AwsDynamoDbTableKeySchema withKeyType(String keyType) {
        this.keyType = keyType;
        return this;
    }
}