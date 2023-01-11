package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStackRequest {
    public DeleteStackHeaders headers;
    public DeleteStackRequest withHeaders(DeleteStackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteStackRequest request;
    public DeleteStackRequest withRequest(openapisdk.models.shared.DeleteStackRequest request) {
        this.request = request;
        return this;
    }
}