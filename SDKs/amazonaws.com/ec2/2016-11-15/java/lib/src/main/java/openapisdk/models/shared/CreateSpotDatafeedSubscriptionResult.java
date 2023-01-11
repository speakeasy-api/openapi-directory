package openapisdk.models.shared;



/**
 * CreateSpotDatafeedSubscriptionResult
 * Contains the output of CreateSpotDatafeedSubscription.
**/
public class CreateSpotDatafeedSubscriptionResult {
    public CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription spotDatafeedSubscription;
    public CreateSpotDatafeedSubscriptionResult withSpotDatafeedSubscription(CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription spotDatafeedSubscription) {
        this.spotDatafeedSubscription = spotDatafeedSubscription;
        return this;
    }
}