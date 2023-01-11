package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfigureChannelCatalogExclusionFiltersRequest {
    public ConfigureChannelCatalogExclusionFiltersPathParams pathParams;
    public ConfigureChannelCatalogExclusionFiltersRequest withPathParams(ConfigureChannelCatalogExclusionFiltersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExclusionFilter[] request;
    public ConfigureChannelCatalogExclusionFiltersRequest withRequest(openapisdk.models.shared.ExclusionFilter[] request) {
        this.request = request;
        return this;
    }
}