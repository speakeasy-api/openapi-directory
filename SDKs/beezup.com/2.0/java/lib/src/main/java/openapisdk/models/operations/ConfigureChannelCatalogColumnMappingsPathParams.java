package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfigureChannelCatalogColumnMappingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public ConfigureChannelCatalogColumnMappingsPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
}