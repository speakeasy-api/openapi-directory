package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemovePermissionRequest {
    public RemovePermissionHeaders headers;
    public RemovePermissionRequest withHeaders(RemovePermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemovePermissionRequest request;
    public RemovePermissionRequest withRequest(openapisdk.models.shared.RemovePermissionRequest request) {
        this.request = request;
        return this;
    }
}