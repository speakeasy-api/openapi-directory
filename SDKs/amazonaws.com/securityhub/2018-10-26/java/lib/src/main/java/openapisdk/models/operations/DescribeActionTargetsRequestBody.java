package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeActionTargetsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActionTargetArns")
    public String[] actionTargetArns;
    public DescribeActionTargetsRequestBody withActionTargetArns(String[] actionTargetArns) {
        this.actionTargetArns = actionTargetArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeActionTargetsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeActionTargetsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}