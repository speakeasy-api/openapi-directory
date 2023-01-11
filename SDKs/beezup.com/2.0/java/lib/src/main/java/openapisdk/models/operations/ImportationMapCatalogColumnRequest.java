package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationMapCatalogColumnRequest {
    public ImportationMapCatalogColumnPathParams pathParams;
    public ImportationMapCatalogColumnRequest withPathParams(ImportationMapCatalogColumnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MapBeezUpColumnRequest request;
    public ImportationMapCatalogColumnRequest withRequest(openapisdk.models.shared.MapBeezUpColumnRequest request) {
        this.request = request;
        return this;
    }
}