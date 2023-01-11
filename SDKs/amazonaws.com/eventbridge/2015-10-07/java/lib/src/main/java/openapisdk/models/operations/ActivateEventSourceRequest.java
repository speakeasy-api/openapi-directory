package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivateEventSourceRequest {
    public ActivateEventSourceHeaders headers;
    public ActivateEventSourceRequest withHeaders(ActivateEventSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ActivateEventSourceRequest request;
    public ActivateEventSourceRequest withRequest(openapisdk.models.shared.ActivateEventSourceRequest request) {
        this.request = request;
        return this;
    }
}