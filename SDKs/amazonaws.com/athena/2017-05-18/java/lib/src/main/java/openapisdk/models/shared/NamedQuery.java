package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NamedQuery
 * A query, where <code>QueryString</code> is the list of SQL query statements that comprise the query.
**/
public class NamedQuery {
    @JsonProperty("Database")
    public String database;
    public NamedQuery withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public NamedQuery withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public NamedQuery withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NamedQueryId")
    public String namedQueryId;
    public NamedQuery withNamedQueryId(String namedQueryId) {
        this.namedQueryId = namedQueryId;
        return this;
    }
    @JsonProperty("QueryString")
    public String queryString;
    public NamedQuery withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkGroup")
    public String workGroup;
    public NamedQuery withWorkGroup(String workGroup) {
        this.workGroup = workGroup;
        return this;
    }
}