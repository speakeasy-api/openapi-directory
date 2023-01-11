package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfigureChannelCatalogCostSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public ConfigureChannelCatalogCostSettingsPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
}