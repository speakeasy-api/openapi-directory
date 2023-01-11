package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePermissionRequest {
    public DeletePermissionHeaders headers;
    public DeletePermissionRequest withHeaders(DeletePermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePermissionRequest request;
    public DeletePermissionRequest withRequest(openapisdk.models.shared.DeletePermissionRequest request) {
        this.request = request;
        return this;
    }
}