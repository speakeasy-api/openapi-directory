package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApiDestinationRequest {
    public UpdateApiDestinationHeaders headers;
    public UpdateApiDestinationRequest withHeaders(UpdateApiDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateApiDestinationRequest request;
    public UpdateApiDestinationRequest withRequest(openapisdk.models.shared.UpdateApiDestinationRequest request) {
        this.request = request;
        return this;
    }
}