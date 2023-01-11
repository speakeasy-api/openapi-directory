package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CatalogTarget
 * Specifies an Glue Data Catalog target.
**/
public class CatalogTarget {
    @JsonProperty("DatabaseName")
    public String databaseName;
    public CatalogTarget withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("Tables")
    public String[] tables;
    public CatalogTarget withTables(String[] tables) {
        this.tables = tables;
        return this;
    }
}