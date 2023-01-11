package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetExecutionHistoryInput {
    @JsonProperty("executionArn")
    public String executionArn;
    public GetExecutionHistoryInput withExecutionArn(String executionArn) {
        this.executionArn = executionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeExecutionData")
    public Boolean includeExecutionData;
    public GetExecutionHistoryInput withIncludeExecutionData(Boolean includeExecutionData) {
        this.includeExecutionData = includeExecutionData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public GetExecutionHistoryInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetExecutionHistoryInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reverseOrder")
    public Boolean reverseOrder;
    public GetExecutionHistoryInput withReverseOrder(Boolean reverseOrder) {
        this.reverseOrder = reverseOrder;
        return this;
    }
}