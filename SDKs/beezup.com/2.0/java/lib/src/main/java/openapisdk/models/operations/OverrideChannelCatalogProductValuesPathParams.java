package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OverrideChannelCatalogProductValuesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public OverrideChannelCatalogProductValuesPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public OverrideChannelCatalogProductValuesPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}