package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetChannelsResponse {
    @JsonProperty("ChannelsResponse")
    public ChannelsResponse channelsResponse;
    public GetChannelsResponse withChannelsResponse(ChannelsResponse channelsResponse) {
        this.channelsResponse = channelsResponse;
        return this;
    }
}