package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateItemInput {
    @JsonProperty("AttributeUpdates")
    public java.util.Map<String, AttributeValueUpdate> attributeUpdates;
    public UpdateItemInput withAttributeUpdates(java.util.Map<String, AttributeValueUpdate> attributeUpdates) {
        this.attributeUpdates = attributeUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expected")
    public java.util.Map<String, ExpectedAttributeValue> expected;
    public UpdateItemInput withExpected(java.util.Map<String, ExpectedAttributeValue> expected) {
        this.expected = expected;
        return this;
    }
    @JsonProperty("Key")
    public Key key;
    public UpdateItemInput withKey(Key key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReturnValues")
    public ReturnValueEnum returnValues;
    public UpdateItemInput withReturnValues(ReturnValueEnum returnValues) {
        this.returnValues = returnValues;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public UpdateItemInput withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}