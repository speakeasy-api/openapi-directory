package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTableRequest {
    @JsonProperty("DatabaseName")
    public String databaseName;
    public DescribeTableRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public DescribeTableRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}