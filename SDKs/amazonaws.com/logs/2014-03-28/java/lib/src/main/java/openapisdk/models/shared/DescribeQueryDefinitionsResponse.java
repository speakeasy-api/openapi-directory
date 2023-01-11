package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeQueryDefinitionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeQueryDefinitionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryDefinitions")
    public QueryDefinition[] queryDefinitions;
    public DescribeQueryDefinitionsResponse withQueryDefinitions(QueryDefinition[] queryDefinitions) {
        this.queryDefinitions = queryDefinitions;
        return this;
    }
}