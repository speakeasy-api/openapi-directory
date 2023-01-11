package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchUpdatePartitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public BatchUpdatePartitionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public BatchUpdatePartitionRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("Entries")
    public BatchUpdatePartitionRequestEntry[] entries;
    public BatchUpdatePartitionRequest withEntries(BatchUpdatePartitionRequestEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public BatchUpdatePartitionRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}