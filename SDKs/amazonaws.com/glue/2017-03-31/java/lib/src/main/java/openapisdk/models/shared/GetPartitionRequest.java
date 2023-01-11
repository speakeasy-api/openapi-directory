package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPartitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public GetPartitionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public GetPartitionRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("PartitionValues")
    public String[] partitionValues;
    public GetPartitionRequest withPartitionValues(String[] partitionValues) {
        this.partitionValues = partitionValues;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public GetPartitionRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}