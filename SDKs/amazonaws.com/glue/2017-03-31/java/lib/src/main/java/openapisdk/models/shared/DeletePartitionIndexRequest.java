package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeletePartitionIndexRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public DeletePartitionIndexRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public DeletePartitionIndexRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("IndexName")
    public String indexName;
    public DeletePartitionIndexRequest withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public DeletePartitionIndexRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}