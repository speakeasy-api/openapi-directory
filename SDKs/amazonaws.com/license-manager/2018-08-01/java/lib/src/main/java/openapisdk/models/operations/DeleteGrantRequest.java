package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGrantRequest {
    public DeleteGrantHeaders headers;
    public DeleteGrantRequest withHeaders(DeleteGrantHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteGrantRequest request;
    public DeleteGrantRequest withRequest(openapisdk.models.shared.DeleteGrantRequest request) {
        this.request = request;
        return this;
    }
}