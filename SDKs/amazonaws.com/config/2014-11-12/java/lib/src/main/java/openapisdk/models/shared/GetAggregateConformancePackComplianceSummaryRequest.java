package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAggregateConformancePackComplianceSummaryRequest {
    @JsonProperty("ConfigurationAggregatorName")
    public String configurationAggregatorName;
    public GetAggregateConformancePackComplianceSummaryRequest withConfigurationAggregatorName(String configurationAggregatorName) {
        this.configurationAggregatorName = configurationAggregatorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public AggregateConformancePackComplianceSummaryFilters filters;
    public GetAggregateConformancePackComplianceSummaryRequest withFilters(AggregateConformancePackComplianceSummaryFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupByKey")
    public AggregateConformancePackComplianceSummaryGroupKeyEnum groupByKey;
    public GetAggregateConformancePackComplianceSummaryRequest withGroupByKey(AggregateConformancePackComplianceSummaryGroupKeyEnum groupByKey) {
        this.groupByKey = groupByKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public GetAggregateConformancePackComplianceSummaryRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetAggregateConformancePackComplianceSummaryRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}