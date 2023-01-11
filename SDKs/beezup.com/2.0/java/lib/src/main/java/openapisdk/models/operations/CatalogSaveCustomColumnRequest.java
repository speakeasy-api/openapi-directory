package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogSaveCustomColumnRequest {
    public CatalogSaveCustomColumnPathParams pathParams;
    public CatalogSaveCustomColumnRequest withPathParams(CatalogSaveCustomColumnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCustomColumnRequest request;
    public CatalogSaveCustomColumnRequest withRequest(openapisdk.models.shared.CreateCustomColumnRequest request) {
        this.request = request;
        return this;
    }
}