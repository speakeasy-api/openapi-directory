package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelCatalogMarketplacePropertiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public GetChannelCatalogMarketplacePropertiesPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
}