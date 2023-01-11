package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public Channel channel;
    public GetChannelResponse withChannel(Channel channel) {
        this.channel = channel;
        return this;
    }
}