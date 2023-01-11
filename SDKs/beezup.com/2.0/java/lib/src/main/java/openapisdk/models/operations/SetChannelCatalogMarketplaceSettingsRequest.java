package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetChannelCatalogMarketplaceSettingsRequest {
    public SetChannelCatalogMarketplaceSettingsPathParams pathParams;
    public SetChannelCatalogMarketplaceSettingsRequest withPathParams(SetChannelCatalogMarketplaceSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetChannelCatalogMarketplaceSettingsRequest request;
    public SetChannelCatalogMarketplaceSettingsRequest withRequest(openapisdk.models.shared.SetChannelCatalogMarketplaceSettingsRequest request) {
        this.request = request;
        return this;
    }
}