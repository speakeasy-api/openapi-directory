package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckConnectionToDestinationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DestinationIdRequestBody request;
    public CheckConnectionToDestinationRequest withRequest(openapisdk.models.shared.DestinationIdRequestBody request) {
        this.request = request;
        return this;
    }
}