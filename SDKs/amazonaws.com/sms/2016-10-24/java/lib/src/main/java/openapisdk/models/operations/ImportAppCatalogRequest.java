package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportAppCatalogRequest {
    public ImportAppCatalogHeaders headers;
    public ImportAppCatalogRequest withHeaders(ImportAppCatalogHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportAppCatalogRequest request;
    public ImportAppCatalogRequest withRequest(openapisdk.models.shared.ImportAppCatalogRequest request) {
        this.request = request;
        return this;
    }
}