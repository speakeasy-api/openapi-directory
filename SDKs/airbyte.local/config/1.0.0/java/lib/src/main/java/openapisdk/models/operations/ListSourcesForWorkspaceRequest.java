package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSourcesForWorkspaceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkspaceIdRequestBody request;
    public ListSourcesForWorkspaceRequest withRequest(openapisdk.models.shared.WorkspaceIdRequestBody request) {
        this.request = request;
        return this;
    }
}