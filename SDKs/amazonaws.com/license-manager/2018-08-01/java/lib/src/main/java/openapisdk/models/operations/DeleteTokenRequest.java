package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTokenRequest {
    public DeleteTokenHeaders headers;
    public DeleteTokenRequest withHeaders(DeleteTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTokenRequest request;
    public DeleteTokenRequest withRequest(openapisdk.models.shared.DeleteTokenRequest request) {
        this.request = request;
        return this;
    }
}