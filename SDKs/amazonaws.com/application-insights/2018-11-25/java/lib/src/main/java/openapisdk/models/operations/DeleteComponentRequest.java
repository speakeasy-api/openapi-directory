package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteComponentRequest {
    public DeleteComponentHeaders headers;
    public DeleteComponentRequest withHeaders(DeleteComponentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteComponentRequest request;
    public DeleteComponentRequest withRequest(openapisdk.models.shared.DeleteComponentRequest request) {
        this.request = request;
        return this;
    }
}