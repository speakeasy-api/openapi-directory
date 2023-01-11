package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPermissionRequest {
    public GetPermissionHeaders headers;
    public GetPermissionRequest withHeaders(GetPermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetPermissionRequestBody request;
    public GetPermissionRequest withRequest(GetPermissionRequestBody request) {
        this.request = request;
        return this;
    }
}