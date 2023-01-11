package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SelectResourceConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public SelectResourceConfigResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QueryInfo")
    public QueryInfo queryInfo;
    public SelectResourceConfigResponse withQueryInfo(QueryInfo queryInfo) {
        this.queryInfo = queryInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Results")
    public String[] results;
    public SelectResourceConfigResponse withResults(String[] results) {
        this.results = results;
        return this;
    }
}