package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MarketplaceChannelCatalogListLinks {
    @JsonProperty("self")
    public LinksGetMarketplaceChannelCatalogsLink self;
    public MarketplaceChannelCatalogListLinks withSelf(LinksGetMarketplaceChannelCatalogsLink self) {
        this.self = self;
        return this;
    }
}