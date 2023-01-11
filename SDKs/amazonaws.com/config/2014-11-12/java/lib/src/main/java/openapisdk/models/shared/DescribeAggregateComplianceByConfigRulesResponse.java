package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAggregateComplianceByConfigRulesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AggregateComplianceByConfigRules")
    public AggregateComplianceByConfigRule[] aggregateComplianceByConfigRules;
    public DescribeAggregateComplianceByConfigRulesResponse withAggregateComplianceByConfigRules(AggregateComplianceByConfigRule[] aggregateComplianceByConfigRules) {
        this.aggregateComplianceByConfigRules = aggregateComplianceByConfigRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeAggregateComplianceByConfigRulesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}