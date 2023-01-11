package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteHitRequest {
    public DeleteHitHeaders headers;
    public DeleteHitRequest withHeaders(DeleteHitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteHitRequest request;
    public DeleteHitRequest withRequest(openapisdk.models.shared.DeleteHitRequest request) {
        this.request = request;
        return this;
    }
}