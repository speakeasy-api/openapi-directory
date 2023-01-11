package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServerRequest {
    public DeleteServerHeaders headers;
    public DeleteServerRequest withHeaders(DeleteServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteServerRequest request;
    public DeleteServerRequest withRequest(openapisdk.models.shared.DeleteServerRequest request) {
        this.request = request;
        return this;
    }
}