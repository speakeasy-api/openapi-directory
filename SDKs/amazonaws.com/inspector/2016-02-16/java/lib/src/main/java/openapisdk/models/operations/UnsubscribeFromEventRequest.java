package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnsubscribeFromEventRequest {
    public UnsubscribeFromEventHeaders headers;
    public UnsubscribeFromEventRequest withHeaders(UnsubscribeFromEventHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnsubscribeFromEventRequest request;
    public UnsubscribeFromEventRequest withRequest(openapisdk.models.shared.UnsubscribeFromEventRequest request) {
        this.request = request;
        return this;
    }
}