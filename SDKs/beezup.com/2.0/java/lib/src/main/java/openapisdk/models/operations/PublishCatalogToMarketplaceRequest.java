package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishCatalogToMarketplaceRequest {
    public PublishCatalogToMarketplacePathParams pathParams;
    public PublishCatalogToMarketplaceRequest withPathParams(PublishCatalogToMarketplacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PublishCatalogToMarketplaceRequest request;
    public PublishCatalogToMarketplaceRequest withRequest(openapisdk.models.shared.PublishCatalogToMarketplaceRequest request) {
        this.request = request;
        return this;
    }
}