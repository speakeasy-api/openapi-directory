package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConnectionAliasPermissionsRequest {
    @JsonProperty("AliasId")
    public String aliasId;
    public DescribeConnectionAliasPermissionsRequest withAliasId(String aliasId) {
        this.aliasId = aliasId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeConnectionAliasPermissionsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeConnectionAliasPermissionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}