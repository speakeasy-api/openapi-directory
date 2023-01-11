package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeJobQueuesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobQueues")
    public JobQueueDetail[] jobQueues;
    public DescribeJobQueuesResponse withJobQueues(JobQueueDetail[] jobQueues) {
        this.jobQueues = jobQueues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeJobQueuesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}