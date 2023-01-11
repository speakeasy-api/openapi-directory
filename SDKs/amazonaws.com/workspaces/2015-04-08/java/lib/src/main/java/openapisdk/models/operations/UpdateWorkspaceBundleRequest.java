package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkspaceBundleRequest {
    public UpdateWorkspaceBundleHeaders headers;
    public UpdateWorkspaceBundleRequest withHeaders(UpdateWorkspaceBundleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateWorkspaceBundleRequest request;
    public UpdateWorkspaceBundleRequest withRequest(openapisdk.models.shared.UpdateWorkspaceBundleRequest request) {
        this.request = request;
        return this;
    }
}