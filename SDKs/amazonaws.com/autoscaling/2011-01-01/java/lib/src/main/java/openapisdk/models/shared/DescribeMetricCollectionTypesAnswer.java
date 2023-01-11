package openapisdk.models.shared;



public class DescribeMetricCollectionTypesAnswer {
    public MetricGranularityType[] granularities;
    public DescribeMetricCollectionTypesAnswer withGranularities(MetricGranularityType[] granularities) {
        this.granularities = granularities;
        return this;
    }
    public MetricCollectionType[] metrics;
    public DescribeMetricCollectionTypesAnswer withMetrics(MetricCollectionType[] metrics) {
        this.metrics = metrics;
        return this;
    }
}