package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListOperationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListOperationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperationSummaryList")
    public OperationSummary[] operationSummaryList;
    public ListOperationsResponse withOperationSummaryList(OperationSummary[] operationSummaryList) {
        this.operationSummaryList = operationSummaryList;
        return this;
    }
}