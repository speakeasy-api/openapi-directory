package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoryCatalogDataRequest {
    public GetRepositoryCatalogDataHeaders headers;
    public GetRepositoryCatalogDataRequest withHeaders(GetRepositoryCatalogDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRepositoryCatalogDataRequest request;
    public GetRepositoryCatalogDataRequest withRequest(openapisdk.models.shared.GetRepositoryCatalogDataRequest request) {
        this.request = request;
        return this;
    }
}