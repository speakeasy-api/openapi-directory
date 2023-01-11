package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateTableInput {
    @JsonProperty("ProvisionedThroughput")
    public ProvisionedThroughput provisionedThroughput;
    public UpdateTableInput withProvisionedThroughput(ProvisionedThroughput provisionedThroughput) {
        this.provisionedThroughput = provisionedThroughput;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public UpdateTableInput withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}