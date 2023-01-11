package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetPermissionRequest {
    public SetPermissionHeaders headers;
    public SetPermissionRequest withHeaders(SetPermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetPermissionRequest request;
    public SetPermissionRequest withRequest(openapisdk.models.shared.SetPermissionRequest request) {
        this.request = request;
        return this;
    }
}