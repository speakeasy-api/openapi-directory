package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateColumnStatisticsForTableRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public UpdateColumnStatisticsForTableRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("ColumnStatisticsList")
    public ColumnStatistics[] columnStatisticsList;
    public UpdateColumnStatisticsForTableRequest withColumnStatisticsList(ColumnStatistics[] columnStatisticsList) {
        this.columnStatisticsList = columnStatisticsList;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public UpdateColumnStatisticsForTableRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public UpdateColumnStatisticsForTableRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}