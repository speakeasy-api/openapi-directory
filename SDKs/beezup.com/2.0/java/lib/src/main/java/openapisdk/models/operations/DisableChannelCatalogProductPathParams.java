package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableChannelCatalogProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public DisableChannelCatalogProductPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public DisableChannelCatalogProductPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}