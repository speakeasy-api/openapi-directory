package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlQueryDatasetAction
 * The SQL query to modify the message.
**/
public class SqlQueryDatasetAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public QueryFilter[] filters;
    public SqlQueryDatasetAction withFilters(QueryFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonProperty("sqlQuery")
    public String sqlQuery;
    public SqlQueryDatasetAction withSqlQuery(String sqlQuery) {
        this.sqlQuery = sqlQuery;
        return this;
    }
}