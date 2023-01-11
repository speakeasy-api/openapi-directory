package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelCatalogProductByChannelCatalogRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChannelCatalogProductByChannelCatalogRequest request;
    public GetChannelCatalogProductByChannelCatalogRequest withRequest(openapisdk.models.shared.ChannelCatalogProductByChannelCatalogRequest request) {
        this.request = request;
        return this;
    }
}