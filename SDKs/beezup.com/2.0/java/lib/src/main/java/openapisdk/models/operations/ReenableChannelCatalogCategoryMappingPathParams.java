package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReenableChannelCatalogCategoryMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public ReenableChannelCatalogCategoryMappingPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
}