package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogChangeCustomColumnUserNameRequest {
    public CatalogChangeCustomColumnUserNamePathParams pathParams;
    public CatalogChangeCustomColumnUserNameRequest withPathParams(CatalogChangeCustomColumnUserNamePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChangeUserColumnNameRequest request;
    public CatalogChangeCustomColumnUserNameRequest withRequest(openapisdk.models.shared.ChangeUserColumnNameRequest request) {
        this.request = request;
        return this;
    }
}