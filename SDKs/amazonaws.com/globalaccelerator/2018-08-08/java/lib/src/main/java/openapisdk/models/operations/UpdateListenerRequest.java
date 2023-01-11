package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateListenerRequest {
    public UpdateListenerHeaders headers;
    public UpdateListenerRequest withHeaders(UpdateListenerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateListenerRequest request;
    public UpdateListenerRequest withRequest(openapisdk.models.shared.UpdateListenerRequest request) {
        this.request = request;
        return this;
    }
}