package openapisdk.models.shared;



/**
 * CloudWatchDestination
 * <p>Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.</p> <p>Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
**/
public class CloudWatchDestination {
    public CloudWatchDimensionConfiguration[] dimensionConfigurations;
    public CloudWatchDestination withDimensionConfigurations(CloudWatchDimensionConfiguration[] dimensionConfigurations) {
        this.dimensionConfigurations = dimensionConfigurations;
        return this;
    }
}