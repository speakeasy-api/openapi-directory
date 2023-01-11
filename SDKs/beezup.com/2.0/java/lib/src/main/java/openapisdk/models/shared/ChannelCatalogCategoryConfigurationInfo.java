package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelCatalogCategoryConfigurationInfo
 * For all catalog categories the current mapping applied
**/
public class ChannelCatalogCategoryConfigurationInfo {
    @JsonProperty("catalogCategoryPath")
    public String[] catalogCategoryPath;
    public ChannelCatalogCategoryConfigurationInfo withCatalogCategoryPath(String[] catalogCategoryPath) {
        this.catalogCategoryPath = catalogCategoryPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCategoryPath")
    public String[] channelCategoryPath;
    public ChannelCatalogCategoryConfigurationInfo withChannelCategoryPath(String[] channelCategoryPath) {
        this.channelCategoryPath = channelCategoryPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costValue")
    public Double costValue;
    public ChannelCatalogCategoryConfigurationInfo withCostValue(Double costValue) {
        this.costValue = costValue;
        return this;
    }
    @JsonProperty("links")
    public ChannelCatalogCategoryMappingInfoLinks links;
    public ChannelCatalogCategoryConfigurationInfo withLinks(ChannelCatalogCategoryMappingInfoLinks links) {
        this.links = links;
        return this;
    }
}