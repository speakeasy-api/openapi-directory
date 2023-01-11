package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribePushDeviceToChannelRequests {
    @SpeakeasyMetadata("request:mediaType=application/x-msgpack")
    public byte[] applicationXMsgpack;
    public SubscribePushDeviceToChannelRequests withApplicationXMsgpack(byte[] applicationXMsgpack) {
        this.applicationXMsgpack = applicationXMsgpack;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object oneOf;
    public SubscribePushDeviceToChannelRequests withOneOf(Object oneOf) {
        this.oneOf = oneOf;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public Object oneOf1;
    public SubscribePushDeviceToChannelRequests withOneOf1(Object oneOf1) {
        this.oneOf1 = oneOf1;
        return this;
    }
}