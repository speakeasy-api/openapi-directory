package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDestinationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DestinationIdRequestBody request;
    public DeleteDestinationRequest withRequest(openapisdk.models.shared.DestinationIdRequestBody request) {
        this.request = request;
        return this;
    }
}