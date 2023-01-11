package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateResourceRequest {
    public UpdateResourceHeaders headers;
    public UpdateResourceRequest withHeaders(UpdateResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateResourceRequest request;
    public UpdateResourceRequest withRequest(openapisdk.models.shared.UpdateResourceRequest request) {
        this.request = request;
        return this;
    }
}