package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeJobQueuesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobQueues")
    public String[] jobQueues;
    public DescribeJobQueuesRequestBody withJobQueues(String[] jobQueues) {
        this.jobQueues = jobQueues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeJobQueuesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeJobQueuesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}