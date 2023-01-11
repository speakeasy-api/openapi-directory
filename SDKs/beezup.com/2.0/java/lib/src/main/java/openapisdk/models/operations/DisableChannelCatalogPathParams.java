package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableChannelCatalogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public DisableChannelCatalogPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
}