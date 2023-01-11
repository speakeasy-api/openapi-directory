package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkspaceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkspaceUpdate request;
    public UpdateWorkspaceRequest withRequest(openapisdk.models.shared.WorkspaceUpdate request) {
        this.request = request;
        return this;
    }
}