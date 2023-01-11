package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublishPushNotificationToDevicesApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("push")
    public openapisdk.models.shared.Push push;
    public PublishPushNotificationToDevicesApplicationJson withPush(openapisdk.models.shared.Push push) {
        this.push = push;
        return this;
    }
    @JsonProperty("recipient")
    public openapisdk.models.shared.Recipient recipient;
    public PublishPushNotificationToDevicesApplicationJson withRecipient(openapisdk.models.shared.Recipient recipient) {
        this.recipient = recipient;
        return this;
    }
}