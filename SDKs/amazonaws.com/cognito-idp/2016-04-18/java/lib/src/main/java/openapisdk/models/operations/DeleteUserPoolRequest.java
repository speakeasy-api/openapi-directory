package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserPoolRequest {
    public DeleteUserPoolHeaders headers;
    public DeleteUserPoolRequest withHeaders(DeleteUserPoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteUserPoolRequest request;
    public DeleteUserPoolRequest withRequest(openapisdk.models.shared.DeleteUserPoolRequest request) {
        this.request = request;
        return this;
    }
}