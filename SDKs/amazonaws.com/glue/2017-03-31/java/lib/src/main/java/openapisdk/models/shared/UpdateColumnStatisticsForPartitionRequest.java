package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateColumnStatisticsForPartitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public UpdateColumnStatisticsForPartitionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("ColumnStatisticsList")
    public ColumnStatistics[] columnStatisticsList;
    public UpdateColumnStatisticsForPartitionRequest withColumnStatisticsList(ColumnStatistics[] columnStatisticsList) {
        this.columnStatisticsList = columnStatisticsList;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public UpdateColumnStatisticsForPartitionRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("PartitionValues")
    public String[] partitionValues;
    public UpdateColumnStatisticsForPartitionRequest withPartitionValues(String[] partitionValues) {
        this.partitionValues = partitionValues;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public UpdateColumnStatisticsForPartitionRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}