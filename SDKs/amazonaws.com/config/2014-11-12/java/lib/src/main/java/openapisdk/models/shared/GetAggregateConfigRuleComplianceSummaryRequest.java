package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAggregateConfigRuleComplianceSummaryRequest {
    @JsonProperty("ConfigurationAggregatorName")
    public String configurationAggregatorName;
    public GetAggregateConfigRuleComplianceSummaryRequest withConfigurationAggregatorName(String configurationAggregatorName) {
        this.configurationAggregatorName = configurationAggregatorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public ConfigRuleComplianceSummaryFilters filters;
    public GetAggregateConfigRuleComplianceSummaryRequest withFilters(ConfigRuleComplianceSummaryFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupByKey")
    public ConfigRuleComplianceSummaryGroupKeyEnum groupByKey;
    public GetAggregateConfigRuleComplianceSummaryRequest withGroupByKey(ConfigRuleComplianceSummaryGroupKeyEnum groupByKey) {
        this.groupByKey = groupByKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public GetAggregateConfigRuleComplianceSummaryRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetAggregateConfigRuleComplianceSummaryRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}