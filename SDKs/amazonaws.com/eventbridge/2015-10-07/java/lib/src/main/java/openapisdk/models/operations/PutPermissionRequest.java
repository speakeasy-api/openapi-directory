package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPermissionRequest {
    public PutPermissionHeaders headers;
    public PutPermissionRequest withHeaders(PutPermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutPermissionRequest request;
    public PutPermissionRequest withRequest(openapisdk.models.shared.PutPermissionRequest request) {
        this.request = request;
        return this;
    }
}