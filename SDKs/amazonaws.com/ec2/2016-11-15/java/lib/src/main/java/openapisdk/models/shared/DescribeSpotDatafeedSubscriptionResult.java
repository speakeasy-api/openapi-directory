package openapisdk.models.shared;



/**
 * DescribeSpotDatafeedSubscriptionResult
 * Contains the output of DescribeSpotDatafeedSubscription.
**/
public class DescribeSpotDatafeedSubscriptionResult {
    public DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription spotDatafeedSubscription;
    public DescribeSpotDatafeedSubscriptionResult withSpotDatafeedSubscription(DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription spotDatafeedSubscription) {
        this.spotDatafeedSubscription = spotDatafeedSubscription;
        return this;
    }
}