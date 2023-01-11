package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAggregateConfigRuleComplianceSummaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AggregateComplianceCounts")
    public AggregateComplianceCount[] aggregateComplianceCounts;
    public GetAggregateConfigRuleComplianceSummaryResponse withAggregateComplianceCounts(AggregateComplianceCount[] aggregateComplianceCounts) {
        this.aggregateComplianceCounts = aggregateComplianceCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupByKey")
    public String groupByKey;
    public GetAggregateConfigRuleComplianceSummaryResponse withGroupByKey(String groupByKey) {
        this.groupByKey = groupByKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetAggregateConfigRuleComplianceSummaryResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}