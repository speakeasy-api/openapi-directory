package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelCatalogProductInfoListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public GetChannelCatalogProductInfoListPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
}