package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServerCatalogRequest {
    public DeleteServerCatalogHeaders headers;
    public DeleteServerCatalogRequest withHeaders(DeleteServerCatalogHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DeleteServerCatalogRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}