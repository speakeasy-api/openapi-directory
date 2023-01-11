package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DynamoDBv2Action
 * <p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p>
**/
public class DynamoDBv2Action {
    @JsonProperty("putItem")
    public PutItemInput putItem;
    public DynamoDBv2Action withPutItem(PutItemInput putItem) {
        this.putItem = putItem;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public DynamoDBv2Action withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}