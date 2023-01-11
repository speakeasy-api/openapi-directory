package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelCatalogColumnMapping
 * Represent a mapping between a channel column (considering channel category mapping) and a catalog column
**/
public class ChannelCatalogColumnMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogColumnId")
    public String catalogColumnId;
    public ChannelCatalogColumnMapping withCatalogColumnId(String catalogColumnId) {
        this.catalogColumnId = catalogColumnId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCategoryPath")
    public String[] channelCategoryPath;
    public ChannelCatalogColumnMapping withChannelCategoryPath(String[] channelCategoryPath) {
        this.channelCategoryPath = channelCategoryPath;
        return this;
    }
    @JsonProperty("channelColumnId")
    public String channelColumnId;
    public ChannelCatalogColumnMapping withChannelColumnId(String channelColumnId) {
        this.channelColumnId = channelColumnId;
        return this;
    }
}