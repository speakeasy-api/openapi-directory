package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListChannelsResponse {
    @JsonProperty("channels")
    public ChannelSummary[] channels;
    public ListChannelsResponse withChannels(ChannelSummary[] channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListChannelsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}