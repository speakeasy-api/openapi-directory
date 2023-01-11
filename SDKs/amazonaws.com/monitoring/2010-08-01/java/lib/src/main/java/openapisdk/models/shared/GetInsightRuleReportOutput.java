package openapisdk.models.shared;



public class GetInsightRuleReportOutput {
    public Double aggregateValue;
    public GetInsightRuleReportOutput withAggregateValue(Double aggregateValue) {
        this.aggregateValue = aggregateValue;
        return this;
    }
    public String aggregationStatistic;
    public GetInsightRuleReportOutput withAggregationStatistic(String aggregationStatistic) {
        this.aggregationStatistic = aggregationStatistic;
        return this;
    }
    public Long approximateUniqueCount;
    public GetInsightRuleReportOutput withApproximateUniqueCount(Long approximateUniqueCount) {
        this.approximateUniqueCount = approximateUniqueCount;
        return this;
    }
    public InsightRuleContributor[] contributors;
    public GetInsightRuleReportOutput withContributors(InsightRuleContributor[] contributors) {
        this.contributors = contributors;
        return this;
    }
    public String[] keyLabels;
    public GetInsightRuleReportOutput withKeyLabels(String[] keyLabels) {
        this.keyLabels = keyLabels;
        return this;
    }
    public InsightRuleMetricDatapoint[] metricDatapoints;
    public GetInsightRuleReportOutput withMetricDatapoints(InsightRuleMetricDatapoint[] metricDatapoints) {
        this.metricDatapoints = metricDatapoints;
        return this;
    }
}