package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfigureChannelCatalogCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public ConfigureChannelCatalogCategoryPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
}