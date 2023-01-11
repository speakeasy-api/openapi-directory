package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPermissionRequest {
    public PutPermissionPathParams pathParams;
    public PutPermissionRequest withPathParams(PutPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutPermissionHeaders headers;
    public PutPermissionRequest withHeaders(PutPermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutPermissionRequestBody request;
    public PutPermissionRequest withRequest(PutPermissionRequestBody request) {
        this.request = request;
        return this;
    }
}