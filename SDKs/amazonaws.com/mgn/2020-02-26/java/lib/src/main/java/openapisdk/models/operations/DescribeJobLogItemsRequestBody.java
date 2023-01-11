package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeJobLogItemsRequestBody {
    @JsonProperty("jobID")
    public String jobID;
    public DescribeJobLogItemsRequestBody withJobId(String jobID) {
        this.jobID = jobID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeJobLogItemsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeJobLogItemsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}