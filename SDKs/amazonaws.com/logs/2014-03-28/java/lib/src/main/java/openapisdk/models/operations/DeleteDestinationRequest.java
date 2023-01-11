package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDestinationRequest {
    public DeleteDestinationHeaders headers;
    public DeleteDestinationRequest withHeaders(DeleteDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDestinationRequest request;
    public DeleteDestinationRequest withRequest(openapisdk.models.shared.DeleteDestinationRequest request) {
        this.request = request;
        return this;
    }
}