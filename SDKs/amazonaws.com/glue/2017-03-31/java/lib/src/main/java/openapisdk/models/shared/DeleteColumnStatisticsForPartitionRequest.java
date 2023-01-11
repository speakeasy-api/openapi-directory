package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteColumnStatisticsForPartitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public DeleteColumnStatisticsForPartitionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("ColumnName")
    public String columnName;
    public DeleteColumnStatisticsForPartitionRequest withColumnName(String columnName) {
        this.columnName = columnName;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public DeleteColumnStatisticsForPartitionRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("PartitionValues")
    public String[] partitionValues;
    public DeleteColumnStatisticsForPartitionRequest withPartitionValues(String[] partitionValues) {
        this.partitionValues = partitionValues;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public DeleteColumnStatisticsForPartitionRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}