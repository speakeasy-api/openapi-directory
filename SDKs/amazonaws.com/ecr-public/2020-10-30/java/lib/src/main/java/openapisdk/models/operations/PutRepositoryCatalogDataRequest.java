package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRepositoryCatalogDataRequest {
    public PutRepositoryCatalogDataHeaders headers;
    public PutRepositoryCatalogDataRequest withHeaders(PutRepositoryCatalogDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutRepositoryCatalogDataRequest request;
    public PutRepositoryCatalogDataRequest withRequest(openapisdk.models.shared.PutRepositoryCatalogDataRequest request) {
        this.request = request;
        return this;
    }
}