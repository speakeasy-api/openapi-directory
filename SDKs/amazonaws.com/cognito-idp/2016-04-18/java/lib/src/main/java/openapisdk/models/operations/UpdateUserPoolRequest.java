package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserPoolRequest {
    public UpdateUserPoolHeaders headers;
    public UpdateUserPoolRequest withHeaders(UpdateUserPoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateUserPoolRequest request;
    public UpdateUserPoolRequest withRequest(openapisdk.models.shared.UpdateUserPoolRequest request) {
        this.request = request;
        return this;
    }
}