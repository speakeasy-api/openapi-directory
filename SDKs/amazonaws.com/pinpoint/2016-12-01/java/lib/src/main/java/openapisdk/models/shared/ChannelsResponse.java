package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelsResponse
 * Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.
**/
public class ChannelsResponse {
    @JsonProperty("Channels")
    public java.util.Map<String, ChannelResponse> channels;
    public ChannelsResponse withChannels(java.util.Map<String, ChannelResponse> channels) {
        this.channels = channels;
        return this;
    }
}