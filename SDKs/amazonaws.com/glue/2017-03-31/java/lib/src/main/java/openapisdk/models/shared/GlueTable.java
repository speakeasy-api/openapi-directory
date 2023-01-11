package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GlueTable
 * The database and table in the Glue Data Catalog that is used for input or output data.
**/
public class GlueTable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public GlueTable withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionName")
    public String connectionName;
    public GlueTable withConnectionName(String connectionName) {
        this.connectionName = connectionName;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public GlueTable withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("TableName")
    public String tableName;
    public GlueTable withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}