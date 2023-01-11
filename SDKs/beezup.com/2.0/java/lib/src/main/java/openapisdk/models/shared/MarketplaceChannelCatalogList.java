package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MarketplaceChannelCatalogList
 * The marketplace channel catalog list
**/
public class MarketplaceChannelCatalogList {
    @JsonProperty("links")
    public MarketplaceChannelCatalogListLinks links;
    public MarketplaceChannelCatalogList withLinks(MarketplaceChannelCatalogListLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("marketplaceChannelCatalogs")
    public MarketplaceChannelCatalog[] marketplaceChannelCatalogs;
    public MarketplaceChannelCatalogList withMarketplaceChannelCatalogs(MarketplaceChannelCatalog[] marketplaceChannelCatalogs) {
        this.marketplaceChannelCatalogs = marketplaceChannelCatalogs;
        return this;
    }
}