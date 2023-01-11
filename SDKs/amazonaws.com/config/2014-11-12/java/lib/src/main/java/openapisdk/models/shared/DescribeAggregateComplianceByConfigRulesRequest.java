package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAggregateComplianceByConfigRulesRequest {
    @JsonProperty("ConfigurationAggregatorName")
    public String configurationAggregatorName;
    public DescribeAggregateComplianceByConfigRulesRequest withConfigurationAggregatorName(String configurationAggregatorName) {
        this.configurationAggregatorName = configurationAggregatorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public ConfigRuleComplianceFilters filters;
    public DescribeAggregateComplianceByConfigRulesRequest withFilters(ConfigRuleComplianceFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeAggregateComplianceByConfigRulesRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeAggregateComplianceByConfigRulesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}