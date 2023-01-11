package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserPoolClientRequest {
    public DeleteUserPoolClientHeaders headers;
    public DeleteUserPoolClientRequest withHeaders(DeleteUserPoolClientHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteUserPoolClientRequest request;
    public DeleteUserPoolClientRequest withRequest(openapisdk.models.shared.DeleteUserPoolClientRequest request) {
        this.request = request;
        return this;
    }
}