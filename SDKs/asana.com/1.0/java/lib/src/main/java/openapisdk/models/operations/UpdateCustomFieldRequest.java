package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCustomFieldRequest {
    public UpdateCustomFieldPathParams pathParams;
    public UpdateCustomFieldRequest withPathParams(UpdateCustomFieldPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateCustomFieldQueryParams queryParams;
    public UpdateCustomFieldRequest withQueryParams(UpdateCustomFieldQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateCustomFieldRequestBodyInput request;
    public UpdateCustomFieldRequest withRequest(UpdateCustomFieldRequestBodyInput request) {
        this.request = request;
        return this;
    }
}