package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubscribePushDeviceToChannelApplicationJson1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;
    public SubscribePushDeviceToChannelApplicationJson1 withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public SubscribePushDeviceToChannelApplicationJson1 withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}