package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddLayerVersionPermissionRequest {
    public AddLayerVersionPermissionPathParams pathParams;
    public AddLayerVersionPermissionRequest withPathParams(AddLayerVersionPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddLayerVersionPermissionQueryParams queryParams;
    public AddLayerVersionPermissionRequest withQueryParams(AddLayerVersionPermissionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AddLayerVersionPermissionHeaders headers;
    public AddLayerVersionPermissionRequest withHeaders(AddLayerVersionPermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddLayerVersionPermissionRequestBody request;
    public AddLayerVersionPermissionRequest withRequest(AddLayerVersionPermissionRequestBody request) {
        this.request = request;
        return this;
    }
}