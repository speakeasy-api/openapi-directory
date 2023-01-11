package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeletePartitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public DeletePartitionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public DeletePartitionRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("PartitionValues")
    public String[] partitionValues;
    public DeletePartitionRequest withPartitionValues(String[] partitionValues) {
        this.partitionValues = partitionValues;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public DeletePartitionRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}