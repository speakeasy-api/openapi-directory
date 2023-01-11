package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetChannelCatalogMarketplaceSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public SetChannelCatalogMarketplaceSettingsPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
}