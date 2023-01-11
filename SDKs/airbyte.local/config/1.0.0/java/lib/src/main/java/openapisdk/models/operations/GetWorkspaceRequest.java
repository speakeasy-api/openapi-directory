package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspaceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkspaceIdRequestBody request;
    public GetWorkspaceRequest withRequest(openapisdk.models.shared.WorkspaceIdRequestBody request) {
        this.request = request;
        return this;
    }
}