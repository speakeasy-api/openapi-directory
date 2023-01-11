package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2 {
    @SpeakeasyMetadata("form:name=channel")
    public String channel;
    public SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2 withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @SpeakeasyMetadata("form:name=clientId")
    public String clientId;
    public SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2 withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
}