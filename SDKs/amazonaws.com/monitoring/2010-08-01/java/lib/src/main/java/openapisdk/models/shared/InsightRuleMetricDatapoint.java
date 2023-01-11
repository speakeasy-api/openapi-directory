package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * InsightRuleMetricDatapoint
 * <p>One data point from the metric time series returned in a Contributor Insights rule report.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>
**/
public class InsightRuleMetricDatapoint {
    public Double average;
    public InsightRuleMetricDatapoint withAverage(Double average) {
        this.average = average;
        return this;
    }
    public Double maxContributorValue;
    public InsightRuleMetricDatapoint withMaxContributorValue(Double maxContributorValue) {
        this.maxContributorValue = maxContributorValue;
        return this;
    }
    public Double maximum;
    public InsightRuleMetricDatapoint withMaximum(Double maximum) {
        this.maximum = maximum;
        return this;
    }
    public Double minimum;
    public InsightRuleMetricDatapoint withMinimum(Double minimum) {
        this.minimum = minimum;
        return this;
    }
    public Double sampleCount;
    public InsightRuleMetricDatapoint withSampleCount(Double sampleCount) {
        this.sampleCount = sampleCount;
        return this;
    }
    public Double sum;
    public InsightRuleMetricDatapoint withSum(Double sum) {
        this.sum = sum;
        return this;
    }
    public OffsetDateTime timestamp;
    public InsightRuleMetricDatapoint withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    public Double uniqueContributors;
    public InsightRuleMetricDatapoint withUniqueContributors(Double uniqueContributors) {
        this.uniqueContributors = uniqueContributors;
        return this;
    }
}