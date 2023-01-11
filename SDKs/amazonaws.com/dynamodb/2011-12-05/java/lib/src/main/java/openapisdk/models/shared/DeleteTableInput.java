package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteTableInput {
    @JsonProperty("TableName")
    public String tableName;
    public DeleteTableInput withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}