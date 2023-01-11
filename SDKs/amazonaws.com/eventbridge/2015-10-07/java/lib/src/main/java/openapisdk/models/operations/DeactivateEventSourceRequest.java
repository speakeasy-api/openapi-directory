package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeactivateEventSourceRequest {
    public DeactivateEventSourceHeaders headers;
    public DeactivateEventSourceRequest withHeaders(DeactivateEventSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeactivateEventSourceRequest request;
    public DeactivateEventSourceRequest withRequest(openapisdk.models.shared.DeactivateEventSourceRequest request) {
        this.request = request;
        return this;
    }
}