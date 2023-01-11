package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePermissionRequest {
    public CreatePermissionHeaders headers;
    public CreatePermissionRequest withHeaders(CreatePermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePermissionRequest request;
    public CreatePermissionRequest withRequest(openapisdk.models.shared.CreatePermissionRequest request) {
        this.request = request;
        return this;
    }
}