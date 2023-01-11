package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryDefinition
 * This structure contains details about a saved CloudWatch Logs Insights query definition.
**/
public class QueryDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModified")
    public Long lastModified;
    public QueryDefinition withLastModified(Long lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroupNames")
    public String[] logGroupNames;
    public QueryDefinition withLogGroupNames(String[] logGroupNames) {
        this.logGroupNames = logGroupNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public QueryDefinition withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryDefinitionId")
    public String queryDefinitionId;
    public QueryDefinition withQueryDefinitionId(String queryDefinitionId) {
        this.queryDefinitionId = queryDefinitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryString")
    public String queryString;
    public QueryDefinition withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
}