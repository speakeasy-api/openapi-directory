package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDeletePartitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public BatchDeletePartitionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public BatchDeletePartitionRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("PartitionsToDelete")
    public PartitionValueList[] partitionsToDelete;
    public BatchDeletePartitionRequest withPartitionsToDelete(PartitionValueList[] partitionsToDelete) {
        this.partitionsToDelete = partitionsToDelete;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public BatchDeletePartitionRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}