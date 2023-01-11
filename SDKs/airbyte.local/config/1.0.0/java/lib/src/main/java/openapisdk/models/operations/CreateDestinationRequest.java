package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDestinationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DestinationCreate request;
    public CreateDestinationRequest withRequest(openapisdk.models.shared.DestinationCreate request) {
        this.request = request;
        return this;
    }
}