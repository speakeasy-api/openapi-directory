package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfigureChannelCatalogGeneralSettingsRequest {
    public ConfigureChannelCatalogGeneralSettingsPathParams pathParams;
    public ConfigureChannelCatalogGeneralSettingsRequest withPathParams(ConfigureChannelCatalogGeneralSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GeneralSettings request;
    public ConfigureChannelCatalogGeneralSettingsRequest withRequest(openapisdk.models.shared.GeneralSettings request) {
        this.request = request;
        return this;
    }
}