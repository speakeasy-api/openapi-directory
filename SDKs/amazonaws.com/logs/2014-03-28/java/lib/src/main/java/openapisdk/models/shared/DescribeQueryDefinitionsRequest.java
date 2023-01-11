package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeQueryDefinitionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeQueryDefinitionsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeQueryDefinitionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryDefinitionNamePrefix")
    public String queryDefinitionNamePrefix;
    public DescribeQueryDefinitionsRequest withQueryDefinitionNamePrefix(String queryDefinitionNamePrefix) {
        this.queryDefinitionNamePrefix = queryDefinitionNamePrefix;
        return this;
    }
}