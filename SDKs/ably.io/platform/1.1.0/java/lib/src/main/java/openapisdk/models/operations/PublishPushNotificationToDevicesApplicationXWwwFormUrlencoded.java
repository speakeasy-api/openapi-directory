package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded {
    @SpeakeasyMetadata("form:name=push")
    public openapisdk.models.shared.Push push;
    public PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded withPush(openapisdk.models.shared.Push push) {
        this.push = push;
        return this;
    }
    @SpeakeasyMetadata("form:name=recipient")
    public openapisdk.models.shared.Recipient recipient;
    public PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded withRecipient(openapisdk.models.shared.Recipient recipient) {
        this.recipient = recipient;
        return this;
    }
}