package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSuppressedDestinationRequest {
    public PutSuppressedDestinationHeaders headers;
    public PutSuppressedDestinationRequest withHeaders(PutSuppressedDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutSuppressedDestinationRequestBody request;
    public PutSuppressedDestinationRequest withRequest(PutSuppressedDestinationRequestBody request) {
        this.request = request;
        return this;
    }
}