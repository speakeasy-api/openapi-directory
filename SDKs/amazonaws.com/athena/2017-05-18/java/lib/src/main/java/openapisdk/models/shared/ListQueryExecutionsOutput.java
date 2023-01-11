package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListQueryExecutionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListQueryExecutionsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QueryExecutionIds")
    public String[] queryExecutionIds;
    public ListQueryExecutionsOutput withQueryExecutionIds(String[] queryExecutionIds) {
        this.queryExecutionIds = queryExecutionIds;
        return this;
    }
}