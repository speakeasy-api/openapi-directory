package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePermissionSetRequest {
    public UpdatePermissionSetHeaders headers;
    public UpdatePermissionSetRequest withHeaders(UpdatePermissionSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePermissionSetRequest request;
    public UpdatePermissionSetRequest withRequest(openapisdk.models.shared.UpdatePermissionSetRequest request) {
        this.request = request;
        return this;
    }
}