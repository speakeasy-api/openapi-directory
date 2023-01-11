package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiDestinationRequest {
    public CreateApiDestinationHeaders headers;
    public CreateApiDestinationRequest withHeaders(CreateApiDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateApiDestinationRequest request;
    public CreateApiDestinationRequest withRequest(openapisdk.models.shared.CreateApiDestinationRequest request) {
        this.request = request;
        return this;
    }
}