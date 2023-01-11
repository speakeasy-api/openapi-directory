package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public Channel channel;
    public CreateChannelResponse withChannel(Channel channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamKey")
    public StreamKey streamKey;
    public CreateChannelResponse withStreamKey(StreamKey streamKey) {
        this.streamKey = streamKey;
        return this;
    }
}