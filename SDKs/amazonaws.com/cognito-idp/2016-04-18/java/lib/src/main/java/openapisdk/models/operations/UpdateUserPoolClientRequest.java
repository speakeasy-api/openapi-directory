package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserPoolClientRequest {
    public UpdateUserPoolClientHeaders headers;
    public UpdateUserPoolClientRequest withHeaders(UpdateUserPoolClientHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateUserPoolClientRequest request;
    public UpdateUserPoolClientRequest withRequest(openapisdk.models.shared.UpdateUserPoolClientRequest request) {
        this.request = request;
        return this;
    }
}