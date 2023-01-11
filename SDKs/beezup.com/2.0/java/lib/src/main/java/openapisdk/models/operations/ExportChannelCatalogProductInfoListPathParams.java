package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportChannelCatalogProductInfoListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public ExportChannelCatalogProductInfoListPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
}