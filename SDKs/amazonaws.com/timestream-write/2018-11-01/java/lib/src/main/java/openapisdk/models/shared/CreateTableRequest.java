package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTableRequest {
    @JsonProperty("DatabaseName")
    public String databaseName;
    public CreateTableRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetentionProperties")
    public RetentionProperties retentionProperties;
    public CreateTableRequest withRetentionProperties(RetentionProperties retentionProperties) {
        this.retentionProperties = retentionProperties;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public CreateTableRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateTableRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}