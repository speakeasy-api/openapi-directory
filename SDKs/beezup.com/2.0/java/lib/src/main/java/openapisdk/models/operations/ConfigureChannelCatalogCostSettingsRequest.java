package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfigureChannelCatalogCostSettingsRequest {
    public ConfigureChannelCatalogCostSettingsPathParams pathParams;
    public ConfigureChannelCatalogCostSettingsRequest withPathParams(ConfigureChannelCatalogCostSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CostSettings request;
    public ConfigureChannelCatalogCostSettingsRequest withRequest(openapisdk.models.shared.CostSettings request) {
        this.request = request;
        return this;
    }
}