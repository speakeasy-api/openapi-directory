package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkspaceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkspaceIdRequestBody request;
    public DeleteWorkspaceRequest withRequest(openapisdk.models.shared.WorkspaceIdRequestBody request) {
        this.request = request;
        return this;
    }
}