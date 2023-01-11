package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutItemInput
 * The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.
**/
public class PutItemInput {
    @JsonProperty("tableName")
    public String tableName;
    public PutItemInput withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}