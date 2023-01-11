package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CatalogEntry
 * Specifies a table definition in the Glue Data Catalog.
**/
public class CatalogEntry {
    @JsonProperty("DatabaseName")
    public String databaseName;
    public CatalogEntry withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public CatalogEntry withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}