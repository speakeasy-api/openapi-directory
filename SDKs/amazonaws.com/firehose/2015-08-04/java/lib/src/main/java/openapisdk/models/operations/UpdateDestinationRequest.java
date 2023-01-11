package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDestinationRequest {
    public UpdateDestinationHeaders headers;
    public UpdateDestinationRequest withHeaders(UpdateDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDestinationInput request;
    public UpdateDestinationRequest withRequest(openapisdk.models.shared.UpdateDestinationInput request) {
        this.request = request;
        return this;
    }
}