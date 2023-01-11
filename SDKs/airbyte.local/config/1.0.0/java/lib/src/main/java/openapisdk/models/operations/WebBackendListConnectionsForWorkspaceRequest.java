package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebBackendListConnectionsForWorkspaceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkspaceIdRequestBody request;
    public WebBackendListConnectionsForWorkspaceRequest withRequest(openapisdk.models.shared.WorkspaceIdRequestBody request) {
        this.request = request;
        return this;
    }
}