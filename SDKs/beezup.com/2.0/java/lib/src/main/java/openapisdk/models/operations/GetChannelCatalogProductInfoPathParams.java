package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelCatalogProductInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public GetChannelCatalogProductInfoPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public GetChannelCatalogProductInfoPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}