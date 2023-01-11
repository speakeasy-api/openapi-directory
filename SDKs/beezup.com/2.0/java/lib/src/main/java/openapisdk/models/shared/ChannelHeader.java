package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelHeader
 * The available channel
**/
public class ChannelHeader {
    @JsonProperty("channelId")
    public String channelId;
    public ChannelHeader withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonProperty("channelLogoUrl")
    public String channelLogoUrl;
    public ChannelHeader withChannelLogoUrl(String channelLogoUrl) {
        this.channelLogoUrl = channelLogoUrl;
        return this;
    }
    @JsonProperty("channelName")
    public String channelName;
    public ChannelHeader withChannelName(String channelName) {
        this.channelName = channelName;
        return this;
    }
    @JsonProperty("links")
    public ChannelHeaderLinks links;
    public ChannelHeader withLinks(ChannelHeaderLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("types")
    public String[] types;
    public ChannelHeader withTypes(String[] types) {
        this.types = types;
        return this;
    }
}