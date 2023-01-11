package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublicChannelIndex {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
    public java.util.Map<String, LinksGetChannelsLink> channels;
    public PublicChannelIndex withChannels(java.util.Map<String, LinksGetChannelsLink> channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public PublicChannelIndexLinks links;
    public PublicChannelIndex withLinks(PublicChannelIndexLinks links) {
        this.links = links;
        return this;
    }
}