package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDestinationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DestinationIdRequestBody request;
    public GetDestinationRequest withRequest(openapisdk.models.shared.DestinationIdRequestBody request) {
        this.request = request;
        return this;
    }
}