package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableChannelCatalogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public EnableChannelCatalogPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
}