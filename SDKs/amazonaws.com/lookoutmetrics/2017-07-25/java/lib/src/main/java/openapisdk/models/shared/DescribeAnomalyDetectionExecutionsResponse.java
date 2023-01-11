package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAnomalyDetectionExecutionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutionList")
    public ExecutionStatus[] executionList;
    public DescribeAnomalyDetectionExecutionsResponse withExecutionList(ExecutionStatus[] executionList) {
        this.executionList = executionList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeAnomalyDetectionExecutionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}