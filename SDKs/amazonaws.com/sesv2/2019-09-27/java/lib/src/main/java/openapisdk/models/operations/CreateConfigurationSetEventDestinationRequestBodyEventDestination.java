package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateConfigurationSetEventDestinationRequestBodyEventDestination
 * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
**/
public class CreateConfigurationSetEventDestinationRequestBodyEventDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchDestination")
    public openapisdk.models.shared.CloudWatchDestination cloudWatchDestination;
    public CreateConfigurationSetEventDestinationRequestBodyEventDestination withCloudWatchDestination(openapisdk.models.shared.CloudWatchDestination cloudWatchDestination) {
        this.cloudWatchDestination = cloudWatchDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public CreateConfigurationSetEventDestinationRequestBodyEventDestination withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisFirehoseDestination")
    public openapisdk.models.shared.KinesisFirehoseDestination kinesisFirehoseDestination;
    public CreateConfigurationSetEventDestinationRequestBodyEventDestination withKinesisFirehoseDestination(openapisdk.models.shared.KinesisFirehoseDestination kinesisFirehoseDestination) {
        this.kinesisFirehoseDestination = kinesisFirehoseDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MatchingEventTypes")
    public openapisdk.models.shared.EventTypeEnum[] matchingEventTypes;
    public CreateConfigurationSetEventDestinationRequestBodyEventDestination withMatchingEventTypes(openapisdk.models.shared.EventTypeEnum[] matchingEventTypes) {
        this.matchingEventTypes = matchingEventTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PinpointDestination")
    public openapisdk.models.shared.PinpointDestination pinpointDestination;
    public CreateConfigurationSetEventDestinationRequestBodyEventDestination withPinpointDestination(openapisdk.models.shared.PinpointDestination pinpointDestination) {
        this.pinpointDestination = pinpointDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnsDestination")
    public openapisdk.models.shared.SnsDestination snsDestination;
    public CreateConfigurationSetEventDestinationRequestBodyEventDestination withSnsDestination(openapisdk.models.shared.SnsDestination snsDestination) {
        this.snsDestination = snsDestination;
        return this;
    }
}