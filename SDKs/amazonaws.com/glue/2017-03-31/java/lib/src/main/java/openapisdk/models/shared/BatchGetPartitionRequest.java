package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetPartitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public BatchGetPartitionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public BatchGetPartitionRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("PartitionsToGet")
    public PartitionValueList[] partitionsToGet;
    public BatchGetPartitionRequest withPartitionsToGet(PartitionValueList[] partitionsToGet) {
        this.partitionsToGet = partitionsToGet;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public BatchGetPartitionRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}