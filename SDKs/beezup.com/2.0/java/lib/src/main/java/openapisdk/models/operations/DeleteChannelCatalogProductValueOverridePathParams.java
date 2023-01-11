package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteChannelCatalogProductValueOverridePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public DeleteChannelCatalogProductValueOverridePathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelColumnId")
    public String channelColumnId;
    public DeleteChannelCatalogProductValueOverridePathParams withChannelColumnId(String channelColumnId) {
        this.channelColumnId = channelColumnId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public DeleteChannelCatalogProductValueOverridePathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}