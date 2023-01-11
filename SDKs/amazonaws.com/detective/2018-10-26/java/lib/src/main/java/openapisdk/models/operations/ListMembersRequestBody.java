package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMembersRequestBody {
    @JsonProperty("GraphArn")
    public String graphArn;
    public ListMembersRequestBody withGraphArn(String graphArn) {
        this.graphArn = graphArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListMembersRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListMembersRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}