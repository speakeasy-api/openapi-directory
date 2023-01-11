package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateTableInput {
    @JsonProperty("KeySchema")
    public KeySchema keySchema;
    public CreateTableInput withKeySchema(KeySchema keySchema) {
        this.keySchema = keySchema;
        return this;
    }
    @JsonProperty("ProvisionedThroughput")
    public ProvisionedThroughput provisionedThroughput;
    public CreateTableInput withProvisionedThroughput(ProvisionedThroughput provisionedThroughput) {
        this.provisionedThroughput = provisionedThroughput;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public CreateTableInput withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}