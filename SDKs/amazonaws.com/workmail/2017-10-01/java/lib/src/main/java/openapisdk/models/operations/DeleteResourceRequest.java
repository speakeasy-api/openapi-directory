package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResourceRequest {
    public DeleteResourceHeaders headers;
    public DeleteResourceRequest withHeaders(DeleteResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteResourceRequest request;
    public DeleteResourceRequest withRequest(openapisdk.models.shared.DeleteResourceRequest request) {
        this.request = request;
        return this;
    }
}