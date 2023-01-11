package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * InsightRuleContributorDatapoint
 * <p>One data point related to one contributor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_InsightRuleContributor.html">InsightRuleContributor</a>.</p>
**/
public class InsightRuleContributorDatapoint {
    public Double approximateValue;
    public InsightRuleContributorDatapoint withApproximateValue(Double approximateValue) {
        this.approximateValue = approximateValue;
        return this;
    }
    public OffsetDateTime timestamp;
    public InsightRuleContributorDatapoint withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}