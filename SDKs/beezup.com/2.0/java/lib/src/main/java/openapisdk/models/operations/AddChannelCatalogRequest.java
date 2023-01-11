package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddChannelCatalogRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddChannelCatalogRequest request;
    public AddChannelCatalogRequest withRequest(openapisdk.models.shared.AddChannelCatalogRequest request) {
        this.request = request;
        return this;
    }
}