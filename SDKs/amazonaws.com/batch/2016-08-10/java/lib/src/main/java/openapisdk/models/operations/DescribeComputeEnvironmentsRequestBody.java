package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeComputeEnvironmentsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEnvironments")
    public String[] computeEnvironments;
    public DescribeComputeEnvironmentsRequestBody withComputeEnvironments(String[] computeEnvironments) {
        this.computeEnvironments = computeEnvironments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeComputeEnvironmentsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeComputeEnvironmentsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}