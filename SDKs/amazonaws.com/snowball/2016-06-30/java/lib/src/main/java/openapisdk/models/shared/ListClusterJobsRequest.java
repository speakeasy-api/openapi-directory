package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListClusterJobsRequest {
    @JsonProperty("ClusterId")
    public String clusterId;
    public ListClusterJobsRequest withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListClusterJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListClusterJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}