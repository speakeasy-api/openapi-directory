package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteTableRequest {
    @JsonProperty("DatabaseName")
    public String databaseName;
    public DeleteTableRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public DeleteTableRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}