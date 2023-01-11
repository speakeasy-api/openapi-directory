package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LegacyTrackingChannelCatalogList
 * This is the index of the channel catalog API
**/
public class LegacyTrackingChannelCatalogList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCatalogs")
    public java.util.Map<String, LegacyTrackingChannelCatalog> channelCatalogs;
    public LegacyTrackingChannelCatalogList withChannelCatalogs(java.util.Map<String, LegacyTrackingChannelCatalog> channelCatalogs) {
        this.channelCatalogs = channelCatalogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public LegacyTrackingChannelCatalogListLinks links;
    public LegacyTrackingChannelCatalogList withLinks(LegacyTrackingChannelCatalogListLinks links) {
        this.links = links;
        return this;
    }
}