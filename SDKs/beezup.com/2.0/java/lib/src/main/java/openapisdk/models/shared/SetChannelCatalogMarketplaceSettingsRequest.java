package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SetChannelCatalogMarketplaceSettingsRequest
 * The channel catalog marketplace settings to save
**/
public class SetChannelCatalogMarketplaceSettingsRequest {
    @JsonProperty("settings")
    public ChannelCatalogMarketplaceSetting[] settings;
    public SetChannelCatalogMarketplaceSettingsRequest withSettings(ChannelCatalogMarketplaceSetting[] settings) {
        this.settings = settings;
        return this;
    }
}