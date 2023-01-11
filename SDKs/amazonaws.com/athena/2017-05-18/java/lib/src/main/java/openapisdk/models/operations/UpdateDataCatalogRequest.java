package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDataCatalogRequest {
    public UpdateDataCatalogHeaders headers;
    public UpdateDataCatalogRequest withHeaders(UpdateDataCatalogHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDataCatalogInput request;
    public UpdateDataCatalogRequest withRequest(openapisdk.models.shared.UpdateDataCatalogInput request) {
        this.request = request;
        return this;
    }
}