package openapisdk.models.shared;



/**
 * DescribeConfigurationSetResponse
 * Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
**/
public class DescribeConfigurationSetResponse {
    public ConfigurationSet configurationSet;
    public DescribeConfigurationSetResponse withConfigurationSet(ConfigurationSet configurationSet) {
        this.configurationSet = configurationSet;
        return this;
    }
    public DeliveryOptions deliveryOptions;
    public DescribeConfigurationSetResponse withDeliveryOptions(DeliveryOptions deliveryOptions) {
        this.deliveryOptions = deliveryOptions;
        return this;
    }
    public EventDestination[] eventDestinations;
    public DescribeConfigurationSetResponse withEventDestinations(EventDestination[] eventDestinations) {
        this.eventDestinations = eventDestinations;
        return this;
    }
    public ReputationOptions reputationOptions;
    public DescribeConfigurationSetResponse withReputationOptions(ReputationOptions reputationOptions) {
        this.reputationOptions = reputationOptions;
        return this;
    }
    public TrackingOptions trackingOptions;
    public DescribeConfigurationSetResponse withTrackingOptions(TrackingOptions trackingOptions) {
        this.trackingOptions = trackingOptions;
        return this;
    }
}