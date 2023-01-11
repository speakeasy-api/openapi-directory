package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApiDestinationRequest {
    public DeleteApiDestinationHeaders headers;
    public DeleteApiDestinationRequest withHeaders(DeleteApiDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteApiDestinationRequest request;
    public DeleteApiDestinationRequest withRequest(openapisdk.models.shared.DeleteApiDestinationRequest request) {
        this.request = request;
        return this;
    }
}