package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkspacesRequest {
    public CreateWorkspacesHeaders headers;
    public CreateWorkspacesRequest withHeaders(CreateWorkspacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateWorkspacesRequest request;
    public CreateWorkspacesRequest withRequest(openapisdk.models.shared.CreateWorkspacesRequest request) {
        this.request = request;
        return this;
    }
}