package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeUsageReportSubscriptionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeUsageReportSubscriptionsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UsageReportSubscriptions")
    public UsageReportSubscription[] usageReportSubscriptions;
    public DescribeUsageReportSubscriptionsResult withUsageReportSubscriptions(UsageReportSubscription[] usageReportSubscriptions) {
        this.usageReportSubscriptions = usageReportSubscriptions;
        return this;
    }
}