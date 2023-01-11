package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrateLegacyTrackingChannelCatalogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public MigrateLegacyTrackingChannelCatalogPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
}