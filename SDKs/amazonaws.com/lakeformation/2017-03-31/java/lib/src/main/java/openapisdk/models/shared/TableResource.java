package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TableResource
 * A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. 
**/
public class TableResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public TableResource withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public TableResource withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public TableResource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableWildcard")
    public java.util.Map<String, Object> tableWildcard;
    public TableResource withTableWildcard(java.util.Map<String, Object> tableWildcard) {
        this.tableWildcard = tableWildcard;
        return this;
    }
}