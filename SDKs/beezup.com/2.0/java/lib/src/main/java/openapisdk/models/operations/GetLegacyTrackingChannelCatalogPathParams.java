package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLegacyTrackingChannelCatalogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public GetLegacyTrackingChannelCatalogPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
}