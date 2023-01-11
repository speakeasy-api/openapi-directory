package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeFlowExecutionRecordsRequestBody {
    @JsonProperty("flowName")
    public String flowName;
    public DescribeFlowExecutionRecordsRequestBody withFlowName(String flowName) {
        this.flowName = flowName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeFlowExecutionRecordsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeFlowExecutionRecordsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}