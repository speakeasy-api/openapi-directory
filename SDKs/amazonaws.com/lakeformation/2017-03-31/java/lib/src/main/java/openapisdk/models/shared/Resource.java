package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resource
 * A structure for the resource.
**/
public class Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Catalog")
    public java.util.Map<String, Object> catalog;
    public Resource withCatalog(java.util.Map<String, Object> catalog) {
        this.catalog = catalog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataLocation")
    public DataLocationResource dataLocation;
    public Resource withDataLocation(DataLocationResource dataLocation) {
        this.dataLocation = dataLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Database")
    public DatabaseResource database;
    public Resource withDatabase(DatabaseResource database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LFTag")
    public LfTagKeyResource lfTag;
    public Resource withLfTag(LfTagKeyResource lfTag) {
        this.lfTag = lfTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LFTagPolicy")
    public LfTagPolicyResource lfTagPolicy;
    public Resource withLfTagPolicy(LfTagPolicyResource lfTagPolicy) {
        this.lfTagPolicy = lfTagPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Table")
    public TableResource table;
    public Resource withTable(TableResource table) {
        this.table = table;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableWithColumns")
    public TableWithColumnsResource tableWithColumns;
    public Resource withTableWithColumns(TableWithColumnsResource tableWithColumns) {
        this.tableWithColumns = tableWithColumns;
        return this;
    }
}