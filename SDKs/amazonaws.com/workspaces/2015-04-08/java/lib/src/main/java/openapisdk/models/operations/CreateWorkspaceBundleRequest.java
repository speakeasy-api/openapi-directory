package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkspaceBundleRequest {
    public CreateWorkspaceBundleHeaders headers;
    public CreateWorkspaceBundleRequest withHeaders(CreateWorkspaceBundleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateWorkspaceBundleRequest request;
    public CreateWorkspaceBundleRequest withRequest(openapisdk.models.shared.CreateWorkspaceBundleRequest request) {
        this.request = request;
        return this;
    }
}