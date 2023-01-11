package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelCatalogList
 * This is the index of the channel catalog API
**/
public class ChannelCatalogList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCatalogs")
    public java.util.Map<String, ChannelCatalog> channelCatalogs;
    public ChannelCatalogList withChannelCatalogs(java.util.Map<String, ChannelCatalog> channelCatalogs) {
        this.channelCatalogs = channelCatalogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ChannelCatalogListLinks links;
    public ChannelCatalogList withLinks(ChannelCatalogListLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lovLinks")
    public ChannelCatalogListLovLinks lovLinks;
    public ChannelCatalogList withLovLinks(ChannelCatalogListLovLinks lovLinks) {
        this.lovLinks = lovLinks;
        return this;
    }
}