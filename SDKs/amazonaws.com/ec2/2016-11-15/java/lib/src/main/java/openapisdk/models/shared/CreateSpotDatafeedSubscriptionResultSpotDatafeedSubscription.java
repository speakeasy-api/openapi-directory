package openapisdk.models.shared;



/**
 * CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription
 * The Spot Instance data feed subscription.
**/
public class CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription {
    public java.util.Map<String, Object> bucket;
    public CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription withBucket(java.util.Map<String, Object> bucket) {
        this.bucket = bucket;
        return this;
    }
    public CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault fault;
    public CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription withFault(CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault fault) {
        this.fault = fault;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> prefix;
    public CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription withPrefix(java.util.Map<String, Object> prefix) {
        this.prefix = prefix;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
}