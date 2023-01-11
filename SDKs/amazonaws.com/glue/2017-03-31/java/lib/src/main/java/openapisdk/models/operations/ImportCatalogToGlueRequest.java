package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportCatalogToGlueRequest {
    public ImportCatalogToGlueHeaders headers;
    public ImportCatalogToGlueRequest withHeaders(ImportCatalogToGlueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportCatalogToGlueRequest request;
    public ImportCatalogToGlueRequest withRequest(openapisdk.models.shared.ImportCatalogToGlueRequest request) {
        this.request = request;
        return this;
    }
}