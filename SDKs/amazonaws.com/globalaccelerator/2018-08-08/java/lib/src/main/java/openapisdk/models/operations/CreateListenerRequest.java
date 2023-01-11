package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateListenerRequest {
    public CreateListenerHeaders headers;
    public CreateListenerRequest withHeaders(CreateListenerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateListenerRequest request;
    public CreateListenerRequest withRequest(openapisdk.models.shared.CreateListenerRequest request) {
        this.request = request;
        return this;
    }
}