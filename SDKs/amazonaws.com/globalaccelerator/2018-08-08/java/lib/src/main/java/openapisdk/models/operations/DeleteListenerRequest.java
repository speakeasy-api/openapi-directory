package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteListenerRequest {
    public DeleteListenerHeaders headers;
    public DeleteListenerRequest withHeaders(DeleteListenerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteListenerRequest request;
    public DeleteListenerRequest withRequest(openapisdk.models.shared.DeleteListenerRequest request) {
        this.request = request;
        return this;
    }
}