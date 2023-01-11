package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCatalogImportStatusRequest {
    public GetCatalogImportStatusHeaders headers;
    public GetCatalogImportStatusRequest withHeaders(GetCatalogImportStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCatalogImportStatusRequest request;
    public GetCatalogImportStatusRequest withRequest(openapisdk.models.shared.GetCatalogImportStatusRequest request) {
        this.request = request;
        return this;
    }
}