package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfigureChannelCatalogCategoryRequest {
    public ConfigureChannelCatalogCategoryPathParams pathParams;
    public ConfigureChannelCatalogCategoryRequest withPathParams(ConfigureChannelCatalogCategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfigureCategoryRequest request;
    public ConfigureChannelCatalogCategoryRequest withRequest(openapisdk.models.shared.ConfigureCategoryRequest request) {
        this.request = request;
        return this;
    }
}