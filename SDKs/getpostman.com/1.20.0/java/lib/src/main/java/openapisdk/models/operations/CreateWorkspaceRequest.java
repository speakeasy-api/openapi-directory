package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkspaceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateWorkspaceRequestBody request;
    public CreateWorkspaceRequest withRequest(CreateWorkspaceRequestBody request) {
        this.request = request;
        return this;
    }
}