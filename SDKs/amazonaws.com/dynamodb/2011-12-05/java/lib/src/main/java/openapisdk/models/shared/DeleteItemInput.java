package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteItemInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expected")
    public java.util.Map<String, ExpectedAttributeValue> expected;
    public DeleteItemInput withExpected(java.util.Map<String, ExpectedAttributeValue> expected) {
        this.expected = expected;
        return this;
    }
    @JsonProperty("Key")
    public Key key;
    public DeleteItemInput withKey(Key key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReturnValues")
    public ReturnValueEnum returnValues;
    public DeleteItemInput withReturnValues(ReturnValueEnum returnValues) {
        this.returnValues = returnValues;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public DeleteItemInput withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}