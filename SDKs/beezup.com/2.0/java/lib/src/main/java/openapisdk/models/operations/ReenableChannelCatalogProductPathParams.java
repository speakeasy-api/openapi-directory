package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReenableChannelCatalogProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public ReenableChannelCatalogProductPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public ReenableChannelCatalogProductPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}