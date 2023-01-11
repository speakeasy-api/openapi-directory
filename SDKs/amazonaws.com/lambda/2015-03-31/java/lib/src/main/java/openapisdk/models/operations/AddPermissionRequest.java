package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddPermissionRequest {
    public AddPermissionPathParams pathParams;
    public AddPermissionRequest withPathParams(AddPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddPermissionQueryParams queryParams;
    public AddPermissionRequest withQueryParams(AddPermissionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AddPermissionHeaders headers;
    public AddPermissionRequest withHeaders(AddPermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddPermissionRequestBody request;
    public AddPermissionRequest withRequest(AddPermissionRequestBody request) {
        this.request = request;
        return this;
    }
}