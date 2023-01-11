package openapisdk.models.shared;



/**
 * DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription
 * The Spot Instance data feed subscription.
**/
public class DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription {
    public java.util.Map<String, Object> bucket;
    public DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription withBucket(java.util.Map<String, Object> bucket) {
        this.bucket = bucket;
        return this;
    }
    public DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault fault;
    public DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription withFault(DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault fault) {
        this.fault = fault;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> prefix;
    public DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription withPrefix(java.util.Map<String, Object> prefix) {
        this.prefix = prefix;
        return this;
    }
    public java.util.Map<String, Object> state;
    public DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
}