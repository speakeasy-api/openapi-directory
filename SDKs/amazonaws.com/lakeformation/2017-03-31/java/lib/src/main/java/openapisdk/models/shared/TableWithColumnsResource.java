package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TableWithColumnsResource
 * <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p>
**/
public class TableWithColumnsResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public TableWithColumnsResource withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnNames")
    public String[] columnNames;
    public TableWithColumnsResource withColumnNames(String[] columnNames) {
        this.columnNames = columnNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnWildcard")
    public ColumnWildcard columnWildcard;
    public TableWithColumnsResource withColumnWildcard(ColumnWildcard columnWildcard) {
        this.columnWildcard = columnWildcard;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public TableWithColumnsResource withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public TableWithColumnsResource withName(String name) {
        this.name = name;
        return this;
    }
}