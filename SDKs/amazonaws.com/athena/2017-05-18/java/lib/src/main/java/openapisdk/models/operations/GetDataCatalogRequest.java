package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDataCatalogRequest {
    public GetDataCatalogHeaders headers;
    public GetDataCatalogRequest withHeaders(GetDataCatalogHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDataCatalogInput request;
    public GetDataCatalogRequest withRequest(openapisdk.models.shared.GetDataCatalogInput request) {
        this.request = request;
        return this;
    }
}