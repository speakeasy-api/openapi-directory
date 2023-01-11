package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchCreatePartitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public BatchCreatePartitionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public BatchCreatePartitionRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("PartitionInputList")
    public PartitionInput[] partitionInputList;
    public BatchCreatePartitionRequest withPartitionInputList(PartitionInput[] partitionInputList) {
        this.partitionInputList = partitionInputList;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public BatchCreatePartitionRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}