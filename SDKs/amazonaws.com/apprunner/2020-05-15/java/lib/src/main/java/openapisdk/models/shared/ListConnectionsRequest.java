package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConnectionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionName")
    public String connectionName;
    public ListConnectionsRequest withConnectionName(String connectionName) {
        this.connectionName = connectionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListConnectionsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListConnectionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}