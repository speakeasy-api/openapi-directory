package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkspaceBundleRequest {
    public DeleteWorkspaceBundleHeaders headers;
    public DeleteWorkspaceBundleRequest withHeaders(DeleteWorkspaceBundleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteWorkspaceBundleRequest request;
    public DeleteWorkspaceBundleRequest withRequest(openapisdk.models.shared.DeleteWorkspaceBundleRequest request) {
        this.request = request;
        return this;
    }
}