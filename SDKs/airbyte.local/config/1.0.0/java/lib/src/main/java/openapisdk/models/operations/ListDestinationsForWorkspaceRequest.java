package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDestinationsForWorkspaceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkspaceIdRequestBody request;
    public ListDestinationsForWorkspaceRequest withRequest(openapisdk.models.shared.WorkspaceIdRequestBody request) {
        this.request = request;
        return this;
    }
}