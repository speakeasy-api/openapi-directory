package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateTableRequest {
    @JsonProperty("DatabaseName")
    public String databaseName;
    public UpdateTableRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("RetentionProperties")
    public RetentionProperties retentionProperties;
    public UpdateTableRequest withRetentionProperties(RetentionProperties retentionProperties) {
        this.retentionProperties = retentionProperties;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public UpdateTableRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}