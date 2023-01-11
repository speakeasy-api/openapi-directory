package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkspaceImagePermissionRequest {
    public UpdateWorkspaceImagePermissionHeaders headers;
    public UpdateWorkspaceImagePermissionRequest withHeaders(UpdateWorkspaceImagePermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateWorkspaceImagePermissionRequest request;
    public UpdateWorkspaceImagePermissionRequest withRequest(openapisdk.models.shared.UpdateWorkspaceImagePermissionRequest request) {
        this.request = request;
        return this;
    }
}