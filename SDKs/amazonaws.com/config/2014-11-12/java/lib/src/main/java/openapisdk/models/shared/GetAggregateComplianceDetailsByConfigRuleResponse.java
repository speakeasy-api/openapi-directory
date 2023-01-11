package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAggregateComplianceDetailsByConfigRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AggregateEvaluationResults")
    public AggregateEvaluationResult[] aggregateEvaluationResults;
    public GetAggregateComplianceDetailsByConfigRuleResponse withAggregateEvaluationResults(AggregateEvaluationResult[] aggregateEvaluationResults) {
        this.aggregateEvaluationResults = aggregateEvaluationResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetAggregateComplianceDetailsByConfigRuleResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}