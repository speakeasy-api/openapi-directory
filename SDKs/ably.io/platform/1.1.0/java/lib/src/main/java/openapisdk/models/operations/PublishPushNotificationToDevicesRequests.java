package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishPushNotificationToDevicesRequests {
    @SpeakeasyMetadata("request:mediaType=application/x-msgpack")
    public byte[] applicationXMsgpack;
    public PublishPushNotificationToDevicesRequests withApplicationXMsgpack(byte[] applicationXMsgpack) {
        this.applicationXMsgpack = applicationXMsgpack;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PublishPushNotificationToDevicesApplicationJson object;
    public PublishPushNotificationToDevicesRequests withObject(PublishPushNotificationToDevicesApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded object1;
    public PublishPushNotificationToDevicesRequests withObject1(PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded object1) {
        this.object1 = object1;
        return this;
    }
}