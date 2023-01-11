package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutItemInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expected")
    public java.util.Map<String, ExpectedAttributeValue> expected;
    public PutItemInput withExpected(java.util.Map<String, ExpectedAttributeValue> expected) {
        this.expected = expected;
        return this;
    }
    @JsonProperty("Item")
    public java.util.Map<String, AttributeValue> item;
    public PutItemInput withItem(java.util.Map<String, AttributeValue> item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReturnValues")
    public ReturnValueEnum returnValues;
    public PutItemInput withReturnValues(ReturnValueEnum returnValues) {
        this.returnValues = returnValues;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public PutItemInput withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}