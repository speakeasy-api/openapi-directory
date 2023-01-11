package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkspaceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkspaceCreate request;
    public CreateWorkspaceRequest withRequest(openapisdk.models.shared.WorkspaceCreate request) {
        this.request = request;
        return this;
    }
}