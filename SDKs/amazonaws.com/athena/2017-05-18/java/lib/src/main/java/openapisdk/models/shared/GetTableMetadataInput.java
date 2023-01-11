package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTableMetadataInput {
    @JsonProperty("CatalogName")
    public String catalogName;
    public GetTableMetadataInput withCatalogName(String catalogName) {
        this.catalogName = catalogName;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public GetTableMetadataInput withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public GetTableMetadataInput withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}