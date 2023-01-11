package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePermissionSetRequest {
    public DeletePermissionSetHeaders headers;
    public DeletePermissionSetRequest withHeaders(DeletePermissionSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePermissionSetRequest request;
    public DeletePermissionSetRequest withRequest(openapisdk.models.shared.DeletePermissionSetRequest request) {
        this.request = request;
        return this;
    }
}