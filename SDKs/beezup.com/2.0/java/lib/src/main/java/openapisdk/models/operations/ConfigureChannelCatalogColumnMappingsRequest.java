package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfigureChannelCatalogColumnMappingsRequest {
    public ConfigureChannelCatalogColumnMappingsPathParams pathParams;
    public ConfigureChannelCatalogColumnMappingsRequest withPathParams(ConfigureChannelCatalogColumnMappingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChannelCatalogColumnMapping[] request;
    public ConfigureChannelCatalogColumnMappingsRequest withRequest(openapisdk.models.shared.ChannelCatalogColumnMapping[] request) {
        this.request = request;
        return this;
    }
}