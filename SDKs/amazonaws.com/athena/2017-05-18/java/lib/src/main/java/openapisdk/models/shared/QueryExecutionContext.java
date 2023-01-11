package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryExecutionContext
 * The database and data catalog context in which the query execution occurs.
**/
public class QueryExecutionContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Catalog")
    public String catalog;
    public QueryExecutionContext withCatalog(String catalog) {
        this.catalog = catalog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Database")
    public String database;
    public QueryExecutionContext withDatabase(String database) {
        this.database = database;
        return this;
    }
}