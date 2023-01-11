package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryTableRowsRequestBody {
    @JsonProperty("filterFormula")
    public QueryTableRowsRequestBodyFilterFormula filterFormula;
    public QueryTableRowsRequestBody withFilterFormula(QueryTableRowsRequestBodyFilterFormula filterFormula) {
        this.filterFormula = filterFormula;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public QueryTableRowsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public QueryTableRowsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}