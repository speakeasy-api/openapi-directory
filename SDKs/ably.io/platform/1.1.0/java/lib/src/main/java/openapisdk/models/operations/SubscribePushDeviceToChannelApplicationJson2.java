package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubscribePushDeviceToChannelApplicationJson2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;
    public SubscribePushDeviceToChannelApplicationJson2 withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public SubscribePushDeviceToChannelApplicationJson2 withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
}