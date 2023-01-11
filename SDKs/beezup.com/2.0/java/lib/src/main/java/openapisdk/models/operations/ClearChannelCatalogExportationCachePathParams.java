package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClearChannelCatalogExportationCachePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public ClearChannelCatalogExportationCachePathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
}