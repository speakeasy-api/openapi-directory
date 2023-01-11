package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDestinationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DestinationUpdate request;
    public UpdateDestinationRequest withRequest(openapisdk.models.shared.DestinationUpdate request) {
        this.request = request;
        return this;
    }
}