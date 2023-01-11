package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeFlowExecutionRecordsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flowExecutions")
    public ExecutionRecord[] flowExecutions;
    public DescribeFlowExecutionRecordsResponse withFlowExecutions(ExecutionRecord[] flowExecutions) {
        this.flowExecutions = flowExecutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeFlowExecutionRecordsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}