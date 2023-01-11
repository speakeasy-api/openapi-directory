package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogChangeCatalogColumnUserNameRequest {
    public CatalogChangeCatalogColumnUserNamePathParams pathParams;
    public CatalogChangeCatalogColumnUserNameRequest withPathParams(CatalogChangeCatalogColumnUserNamePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChangeUserColumnNameRequest request;
    public CatalogChangeCatalogColumnUserNameRequest withRequest(openapisdk.models.shared.ChangeUserColumnNameRequest request) {
        this.request = request;
        return this;
    }
}