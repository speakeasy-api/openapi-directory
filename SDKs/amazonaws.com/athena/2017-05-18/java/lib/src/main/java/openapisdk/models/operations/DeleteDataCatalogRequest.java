package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDataCatalogRequest {
    public DeleteDataCatalogHeaders headers;
    public DeleteDataCatalogRequest withHeaders(DeleteDataCatalogHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDataCatalogInput request;
    public DeleteDataCatalogRequest withRequest(openapisdk.models.shared.DeleteDataCatalogInput request) {
        this.request = request;
        return this;
    }
}