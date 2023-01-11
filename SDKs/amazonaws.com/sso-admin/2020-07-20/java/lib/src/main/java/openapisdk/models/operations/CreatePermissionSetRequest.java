package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePermissionSetRequest {
    public CreatePermissionSetHeaders headers;
    public CreatePermissionSetRequest withHeaders(CreatePermissionSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePermissionSetRequest request;
    public CreatePermissionSetRequest withRequest(openapisdk.models.shared.CreatePermissionSetRequest request) {
        this.request = request;
        return this;
    }
}