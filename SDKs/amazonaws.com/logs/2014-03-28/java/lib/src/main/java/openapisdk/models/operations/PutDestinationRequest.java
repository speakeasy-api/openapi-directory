package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDestinationRequest {
    public PutDestinationHeaders headers;
    public PutDestinationRequest withHeaders(PutDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutDestinationRequest request;
    public PutDestinationRequest withRequest(openapisdk.models.shared.PutDestinationRequest request) {
        this.request = request;
        return this;
    }
}