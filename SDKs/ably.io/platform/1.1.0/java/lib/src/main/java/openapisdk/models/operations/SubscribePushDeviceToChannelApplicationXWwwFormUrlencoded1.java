package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1 {
    @SpeakeasyMetadata("form:name=channel")
    public String channel;
    public SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1 withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @SpeakeasyMetadata("form:name=deviceId")
    public String deviceId;
    public SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1 withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}