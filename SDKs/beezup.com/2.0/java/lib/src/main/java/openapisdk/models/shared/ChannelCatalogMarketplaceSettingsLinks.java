package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChannelCatalogMarketplaceSettingsLinks {
    @JsonProperty("save")
    public LinksSetChannelCatalogMarketplaceSettingsLink save;
    public ChannelCatalogMarketplaceSettingsLinks withSave(LinksSetChannelCatalogMarketplaceSettingsLink save) {
        this.save = save;
        return this;
    }
    @JsonProperty("self")
    public LinksGetChannelCatalogMarketplaceSettingsLink self;
    public ChannelCatalogMarketplaceSettingsLinks withSelf(LinksGetChannelCatalogMarketplaceSettingsLink self) {
        this.self = self;
        return this;
    }
}