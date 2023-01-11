package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteColumnStatisticsForTableRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public DeleteColumnStatisticsForTableRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("ColumnName")
    public String columnName;
    public DeleteColumnStatisticsForTableRequest withColumnName(String columnName) {
        this.columnName = columnName;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public DeleteColumnStatisticsForTableRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public DeleteColumnStatisticsForTableRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}