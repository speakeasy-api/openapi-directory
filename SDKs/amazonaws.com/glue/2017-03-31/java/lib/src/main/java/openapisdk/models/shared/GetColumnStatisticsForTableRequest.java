package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetColumnStatisticsForTableRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public GetColumnStatisticsForTableRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("ColumnNames")
    public String[] columnNames;
    public GetColumnStatisticsForTableRequest withColumnNames(String[] columnNames) {
        this.columnNames = columnNames;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public GetColumnStatisticsForTableRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public GetColumnStatisticsForTableRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}